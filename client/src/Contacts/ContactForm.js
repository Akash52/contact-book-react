import { useState, useContext, useEffect } from 'react'
import ContactContext from '../Context/Contact/contactContext'

const ContactForm = () => {
  const contactContext = useContext(ContactContext)
  const { current, addContact, clearCurrent, updateContact } = contactContext

  useEffect(() => {
    if (current !== null) {
      setContact(current)
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      })
    }
  }, [contactContext, current])

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  })
  const { name, email, phone, type } = contact

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (current === null) {
      addContact(contact)
    } else {
      updateContact(contact)
    }
  }
  return (
    <div className="flex flex-col justify-center m-2 xs:mx-5 sm:m-3 sm:mx-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-extrabold text-center text-white lg:text-3xl md:text-xl">
          {current ? 'Edit Contact' : 'Add Contact'}
        </h2>
      </div>
      <div className="mt-4 shadow-md sm:mx-auto sm:w-full hover:shadow-sm sm:max-w-md">
        <div className="px-4 py-8 transition duration-500 bg-gray-800 hover:opacity-95 sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onSubmit} autoComplete="off">
            <div>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="name"
                  value={name}
                  onChange={onChange}
                  required
                  placeholder="Name"
                  className="block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
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
                  id="phone"
                  name="phone"
                  type="phone"
                  value={phone}
                  required
                  onChange={onChange}
                  placeholder="Phone"
                  className="block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center ">
              <div className="flex items-center">
                <input
                  id="type"
                  name="type"
                  type="radio"
                  value="personal"
                  className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-300 rounded focus:ring-indigo-500"
                  checked={type === 'personal'}
                  onChange={onChange}
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-white"
                >
                  Personal
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="type"
                  type="radio"
                  value="professional"
                  className="w-4 h-4 ml-2 text-indigo-600 bg-gray-700 border-gray-300 rounded focus:ring-indigo-500"
                  checked={type === 'professional'}
                  onChange={onChange}
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-white"
                >
                  Professional
                </label>
              </div>
            </div>

            <div>
              <button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md shadow-sm hover:bg-indigo-300 focus:outline-none "
              >
                {current ? 'Update Contact' : 'Add Contact'}
              </button>
            </div>
            {current && (
              <div>
                <button
                  type="submit"
                  onClick={() => clearCurrent()}
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md shadow-sm hover:bg-indigo-300 focus:outline-none"
                >
                  Clear
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
