import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import ContactState from './Context/Contact/contactState'
import Footer from './Layout/Footer'
import Page404 from './Pages/Page404'

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="*" exact={true} component={Page404} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </ContactState>
  )
}

export default App
