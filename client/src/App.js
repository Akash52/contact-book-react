import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import ContactState from './Context/Contact/contactState'
import Footer from './Layout/Footer'
import Loader from './Components/Loader'

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </ContactState>
  )
}

export default App
