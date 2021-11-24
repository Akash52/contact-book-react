import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import ContactState from './Context/Contact/contactState'
import Seaction from './Layout/Seaction'

const App = () => {
  return (
    <div className="bg-gray-900">
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <Seaction />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Fragment>
        </Router>
      </ContactState>
    </div>
  )
}

export default App
