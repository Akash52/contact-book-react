import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Layout/Navabr'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  )
}

export default App
