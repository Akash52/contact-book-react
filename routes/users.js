const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')

//@route POST api/users
//@desc Register a user
//@acess Public

//Route & Validation
router.post(
  '/',
  [
    check('name', 'Please add Name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter password 6 or more character').isLength({
      min: 6,
    }),
  ],

  //Return Errors
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    //Destructure Properties

    const { name, email, password } = req.body

    try {
      //Check if user already exist

      let user = await User.findOne({ email })

      if (user) {
        return res.status(400).json({ msg: 'User already exists' })
      }

      //Create new User
      user = new User({
        name,
        email,
        password,
      })

      // Encrypt Password
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
      //Save user to DataBase
      await user.save()
      //Set Payload for our JWT
      const payload = {
        user: {
          id: user.id,
        },
      }
      //Pass Parameter with JWT
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router
