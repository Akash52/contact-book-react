import React, { useContext } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </>
  )
}

export default Contacts
