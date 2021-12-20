import React from 'react'
import Contacts from '../Contacts/Contacts'
import ContactForm from './../Contacts/ContactForm'
import ContactFilter from './../Contacts/ContactFilter'
import Seaction from '../Layout/Seaction'

const Home = () => {
  return (
    <>
      <Seaction />
      <div className="container grid gap-8 pt-6 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="lg:border-r xs:border-none  border-gray-700  opacity-80">
          <ContactForm />
        </div>

        <div>
          <ContactFilter />

          <Contacts />
        </div>
      </div>
    </>
  )
}

export default Home
