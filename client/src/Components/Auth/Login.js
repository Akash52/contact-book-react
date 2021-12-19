import React, { useState } from 'react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Login User')
  }

  return (
    <div className="flex flex-col justify-center m-2 xs:mx-5 sm:m-3 sm:mx-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-extrabold text-center text-white lg:text-3xl md:text-xl">
          Login
        </h2>
      </div>
      <div className="mt-4 shadow-md sm:mx-auto sm:w-full hover:shadow-sm sm:max-w-md">
        <div className="px-4 py-8 transition duration-500 bg-gray-800 hover:opacity-95 sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onSubmit} autoComplete="off">
            <div>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={onChange}
                  required
                  className="block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  required
                  onChange={onChange}
                  placeholder="Password"
                  className="block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="w-4 h-4 ml-2 text-indigo-600 bg-gray-700 border-gray-300 rounded focus:ring-indigo-500"
                defaultChecked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-white"
              >
                Show Password
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md shadow-sm hover:bg-indigo-300 focus:outline-none "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
