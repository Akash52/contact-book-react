import React, { useReducer } from 'react'

import ContactContext from './contactContext'
import contactReducers from './contactReducers'

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
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
    current: null,
    filtered: null,
  }
  const [state, dispatch] = useReducer(contactReducers, initialState)
  //ADD CONTACT

  const addContact = (contact) => {
    contact.id = uuid.v4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  //DELETE CONTACT

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  //SET CURRENT CONTACT

  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  //CLEAR CURRENT CONTACT

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  //UPDATE CURRENT CONTACT

  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  }

  //FILTER COONTACTS

  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text })
  }

  //CLEAR FLITER

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
