import React from 'react'
import ContactForm from '../Contacts/ContactForm'

const Modal = () => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <div className="flex justify-center">
        <button
          className="flex justify-center px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
          type="button"
          onClick={() => setShowModal(!showModal)}
        >
          {showModal ? 'Close Form' : 'Open Form'}
        </button>
      </div>
      {showModal ? <ContactForm /> : null}
    </>
  )
}

export default Modal
