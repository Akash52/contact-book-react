import React from 'react'
import ContactForm from '../Contacts/ContactForm'
import Contacts from '../Contacts/Contacts'
import Seaction from '../Layout/Seaction'
import ContactFilter from './../Contacts/ContactFilter'

const Home = () => {
  return (
    <>
      <div className="border-b border-gray-800">
        <Seaction />
      </div>

      <div className="container grid gap-8 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="border-r border-gray-800">
          <ContactForm />
        </div>
        <div>
          <div className="flex justify-center flex-1 px-2 mt-4 lg:ml-6">
            <ContactFilter />
          </div>
          <Contacts />
        </div>
      </div>
    </>
  )
}

export default Home
