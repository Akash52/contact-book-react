import React, { useContext } from 'react'

import ContactContext from '../Context/Contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
  const contactContext = useContext(ContactContext)
  const { contacts } = contactContext
  console.log(contacts)
  return (
    <>
      {contacts.map((contact, id) => (
        <ContactItem key={id} contact={contact} />
      ))}
    </>
  )
}

export default Contacts
