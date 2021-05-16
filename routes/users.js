const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const User = require('../models/User')

//@route POST api/users
//@desc Register a user
//@acess Public

router.post(
  '/',
  [
    check('name', 'Please add Name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter password 6 or more character').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.send('Passed')
  }
)

module.exports = router
