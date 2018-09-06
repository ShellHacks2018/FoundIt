import React, { Component } from 'react'

/* Components */
import NavbarC from './components/navbar/NavbarC'
/* Pages */
import LandingPC from './pages/landing/LandingPC'
import MapPC from './pages/map/MapPC'
/* Styles */
import './styles/App.css'
/* React Router v4 */
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <NavbarC />
          <Switch>
            <Route exact path='/' component={LandingPC} />
            <Route path='/map' component={MapPC} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
