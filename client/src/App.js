import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import ContactState from './Context/Contact/contactState'
import AuthState from './Context/Auth/authState'

import Page404 from './Pages/Page404'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import Footer from './Layout/Footer'

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route path="*" exact={true} component={Page404} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  )
}

export default App
