import React from 'react'
import ContactForm from '../Contacts/ContactForm'
import Contacts from '../Contacts/Contacts'

const Home = () => {
  return (
    <div className="container grid gap-8 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  )
}

export default Home
