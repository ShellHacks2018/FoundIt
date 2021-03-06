import React, { Component } from 'react'
import {connect} from 'react-redux';

/* View */
import LandingPV from './LandingPV'
import authA from '../../redux/actions/authA';

class LandingPC extends Component {

  // These functions should fire the actions that are found at the bottom of this file
  updateEmail = event => {
    this.props.updateEmail(event.target.value)
  }
  updatePassword = event => {
    this.props.updatePassword(event.target.value)
  }

  signInSubmit = () => {
    let data = {
      'email': this.props.email,
      'password': this.props.password
    }
    this.props.authFn.login(data);
  }

  createSubmit = () => {
    let data = {
      'username': this.props.email,
      'email': this.props.email,
      'password': this.props.password
    }
    this.props.authFn.register(data);
  }

  render () {
    return (
      <LandingPV
        updateEmail={this.updateEmail}
        updatePassword={this.updatePassword}
        signInSubmit={this.signInSubmit}
        createSubmit={this.createSubmit} />
    )
  }
}

// Declare the state that the LandingPC will need
const landingPageState = state => {
  return {
    email: state.LoginPageR.email,
    password: state.LoginPageR.password
  }
}

// The (val) that is recieved from each function is dispatched with a (type and the value)
// Eventually this action will update the central store state.
const landingPageAction = dispatch => {
  return {
    updateEmail: (val) => { dispatch({type: 'GET_EMAIL', val: val}) },
    updatePassword: (val) => { dispatch({type: 'GET_PASSWORD', val: val}) },
    authFn: authA(dispatch)
  }
}

export default connect(landingPageState, landingPageAction)(LandingPC)
