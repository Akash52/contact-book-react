/* eslint-disable no-const-assign */
import { useContext } from 'react'
import {
  MailIcon,
  PhoneIcon,
  TrashIcon,
  PencilIcon,
} from '@heroicons/react/solid'
import ContactContext from '../Context/Contact/contactContext'
const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext)
  const { deleteContact, setCurrent, clearCurrent } = contactContext
  const { id, name, email, phone, type } = contact

  const onDelete = () => {
    deleteContact(id)
    clearCurrent()
  }

  return (
    <>
      <div className="flex items-center justify-center w-full mx-auto mt-2 mb-2 ">
        <ul className="w-4/5 mx-auto transition duration-500 ease-in-out transform hover:-translate-x-1 hover:scale-105">
          <li className="col-span-1 transition duration-200 divide-y divide-gray-100 rounded-lg shadow-2xl bg-gradient-to-l from-yellow-500 via-pink-500 to-green-500 ">
            <div className="flex items-center justify-between w-full p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-sm font-medium text-gray-100 truncate">
                    {name}
                  </h3>
                  <span
                    className={
                      'flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'
                    }
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-300 truncate">{email}</p>
              </div>
              <img
                className="flex-shrink-0 object-cover w-10 h-10 bg-gray-300 rounded-full"
                src={
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
                }
                alt="oops"
              />
            </div>
            <div>
              <div className="flex -mt-px divide-x divide-gray-400">
                <div className="flex flex-1 w-0">
                  <a
                    href={`mailto:${email}`}
                    className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <MailIcon
                      className="w-5 h-5 text-gray-100"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-200">Email</span>
                  </a>
                </div>

                <div className="flex flex-1 w-0 -ml-px">
                  <a
                    href={`tel:${phone}`}
                    className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <PhoneIcon
                      className="w-5 h-5 text-gray-100"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-200">Call</span>
                  </a>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <div className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500">
                    <PencilIcon
                      onClick={() => setCurrent(contact)}
                      className="w-5 h-5 text-gray-100 cursor-pointer "
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="flex flex-1 w-0 -ml-px">
                  <div className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500">
                    <TrashIcon
                      onClick={() => onDelete()}
                      className="w-5 h-5 text-gray-100 cursor-pointer "
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ContactItem
