import React, { Component } from 'react'

/* Pages */
import LandingPC from './pages/landing/LandingPC'
import mapPC from './pages/map/mapPC'
/* Styles */
import './styles/App.css'
/* React Router v4 */
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={LandingPC} />
            <Route path='/map' component={mapPC} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
