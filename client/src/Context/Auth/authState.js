import React, { useReducer } from 'react'

import AuthContext from './authContext'
import authReducers from './authReducers'

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOAD,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types'

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  }
  const [state, dispatch] = useReducer(authReducers, initialState)

  // Load User

  // Register User

  // Login User

  // Logout User

  // Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
