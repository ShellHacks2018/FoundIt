import React, { Component } from 'react'
/* View */
import NavbarV from './NavbarV'
import NavbarV2 from './NavbarV2'
import { connect } from 'react-redux';

//created an additional navbar called V2, could renaming
//having the conditionals in one NavbarV component had auth problems so implemented two versions 
//handled in NavbarC

class NavbarC extends Component {
  render () {
    if(this.props.auth == false){
      return (
        <NavbarV clicked={this.props.authLogIn} />
      )
    }
    else {
      return (
        <NavbarV2 clicked={this.props.authLogOut} />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authR.auth,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    authLogIn: () => dispatch({type: 'LOGIN'}),
    authLogOut: () => dispatch({type: 'LOGOUT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarC)
