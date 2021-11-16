import { useState, useContext } from 'react'
import ContactContext from '../Context/Contact/contactContext'

const ContactForm = () => {
  const contactContext = useContext(ContactContext)
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
    contactContext.addContact(contact)
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    })
  }
  return (
    <div className="flex flex-col justify-center xs:mx-5 sm:mx-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-2xl font-extrabold text-center text-gray-900">
          Add Contact
        </h2>
      </div>
      <div className="mt-4 shadow-md sm:mx-auto sm:w-full hover:shadow-sm sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
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
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  checked={type === 'personal'}
                  onChange={onChange}
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-900"
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
                  className="w-4 h-4 ml-2 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  checked={type === 'professional'}
                  onChange={onChange}
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Professional
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
