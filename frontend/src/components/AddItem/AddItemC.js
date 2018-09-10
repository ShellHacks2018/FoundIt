import React, { Component } from 'react'

import AddItemV from './AddItemV'

class AddItemC extends Component {
  state = {
    formOpen: false,
    checkboxes: {
      Clothing: false,
      Jewelery: false,
      Electronics: false,
      Book: false,
      Other: false
    }
  }

  formOpenCB = () => {
    this.setState({ formOpen: true });
  };

  formCloseCB = () => {
    this.setState({ formOpen: false });
  };

  checkClicked = (name) => event => {
    // [name] is called "computed property name"
    // Allows for variablly setting state in a single fuction!
    this.setState({ ...this.state, 
                    checkboxes: {
                      ...this.state.checkboxes,
                      [name]: event.target.checked }
                  });
  };

  render () {
    return (
      <div>
        <AddItemV 
          form={this.state.formOpen}
          formOpenCB = {this.formOpenCB}
          formCloseCB = {this.formCloseCB}
          checkedState = {this.state['checkboxes']}
          checkClicked = {this.checkClicked}
        />
      </div>
    )
  }
}

export default AddItemC
