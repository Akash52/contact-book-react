import { useContext } from 'react'
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
    <div className="flex items-center justify-center w-full px-6 mb-3 dark:bg-gray-900 ">
      <div>
        <div className="flex flex-col justify-between h-64 max-w-sm px-4 py-5 bg-white border border-gray-400 rounded-lg shadow-xl cursor-pointer hover:shadow-md dark:bg-gray-800 ">
          <div className="flex justify-between">
            <h4 className="mb-3 font-bold text-gray-800 dark:text-gray-100">
              {name}
            </h4>
            <span className="inline-flex items-center justify-center px-2 py-1 ml-2 text-xs font-semibold leading-none text-indigo-100 bg-blue-600 rounded">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <span className="inline-flex items-center justify-center ml-1 text-sm font-semibold leading-none text-gray-600 rounded">
              {email}
            </span>
          </div>

          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="inline-flex items-center justify-center ml-1 text-sm font-semibold leading-none text-gray-600 rounded">
              {phone}
            </span>
          </div>

          <p className="text-sm text-gray-800 dark:text-gray-100">
            Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt,
            neque porro quisquam est, quid malum, sensu iudicari, sed ut
            alterum.
          </p>

          <div>
            <div className="flex items-center justify-between text-gray-800">
              <button
                onClick={() => setCurrent(contact)}
                className="flex items-center justify-center w-8 h-8 text-white bg-gray-800 rounded-full hover:bg-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
              <button
                onClick={onDelete}
                className="flex items-center justify-center w-8 h-8 text-white bg-gray-800 rounded-full hover:bg-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactItem
