import { SearchIcon } from '@heroicons/react/solid'
import { useContext, useEffect, useRef } from 'react'
import ContactContext from './../Context/Contact/contactContext'

const ContactFilter = () => {
  const contactContext = useContext(ContactContext)

  const { filterContact, clearFilter, filtered } = contactContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const text = useRef('')

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContact(e.target.value)
    } else {
      clearFilter()
    }
  }

  return (
    <form>
      <div className="z-10 w-full max-w-sm mx-auto ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            name="text"
            className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 bg-gray-700 border border-transparent rounded-md focus:outline-none sm:text-sm"
            placeholder="Search"
            type="Search"
            autoComplete="off"
            onChange={onChange}
            ref={text}
          />
        </div>
      </div>
    </form>
  )
}

export default ContactFilter
