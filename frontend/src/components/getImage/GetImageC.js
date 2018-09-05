import React, { Component } from 'react'

/* View */
import GetImageV from './GetImageV'

class GetImageC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewType: '',
      pic: ''
    }
  }

  /* Image selected by user */
  uploadSelected = (event) => {
    console.log(event)
  }

  viewTypeCancel = () => {
    this.setState({viewType: ''})
  }

  viewTypeUpload = () => {
    this.setState({viewType: 'upload'})
  }
  
  viewTypeCamera = (al) => {
    this.setState({viewType: 'camera'})
  }


  render () {
    return (
      <div>
        <GetImageV 
          uploadSelected={this.uploadSelected}
          viewTypeCancel={this.viewTypeCancel}
          viewTypeUpload={this.viewTypeUpload}
          viewTypeCamera={this.viewTypeCamera}
          viewType={this.state.viewType}/>
      </div>
    )
  }
}

export default GetImageC
