import React, { useReducer } from 'react'

import ContactContext from './contactContext'
import contactReducers from './contactReducers'

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../types'

const uuid = require('uuid')

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '333-333-333',
        type: 'professional',
      },
    ],
  }
  const [state, dispatch] = useReducer(contactReducers, initialState)
  //ADD CONTACT

  const addContact = (contact) => {
    contact.id = uuid.v4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  //DELETE CONTACT

  //SET CURRENT CONTACT

  //CLEAR CURRENT CONTACT

  //UPDATE CURRENT CONTACT

  //FILTER COONTACTS

  //CLEAR FLITER

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
