import React, { useContext } from 'react'

import ContactContext from '../Context/Contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
  const contactContext = useContext(ContactContext)
  const { contacts, filtered } = contactContext

  if (contacts.length === 0) {
    return (
      <p class="max-w-2xl flex justify-center mx-auto mt-8 text-xl font-medium text-white">
        Please add a Contact!
      </p>
    )
  }

  return (
    <>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </>
  )
}

export default Contacts
