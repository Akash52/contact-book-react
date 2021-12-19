import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 mb-3 bg-gray-900 shadow-2xl">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap"
              to="/"
            >
              <i className="m-2 text-lg text-white opacity-75 fas fa-id-card leading-lg animate-pulse"></i>
              Contact Manager
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? (
                <i className="fas fa-bars " />
              ) : (
                <i className="fas fa-times" />
              )}
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                  to="/"
                >
                  <i className="text-lg text-white opacity-75 fas fa-home leading-lg"></i>
                  <span className="ml-2">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                  to="/register"
                >
                  <i className="text-lg text-white opacity-75 fas fa-user-plus"></i>
                  <span className="ml-2">Register</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                  to="/login"
                >
                  <i className="text-lg text-white opacity-75 fas fa-user"></i>
                  <span className="ml-2">Login</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                  to="/about"
                >
                  <i className="text-lg text-white opacity-75 fas fa-question leading-lg"></i>
                  <span className="ml-2">About</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
