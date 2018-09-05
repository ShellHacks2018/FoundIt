import React, {Component} from 'react'
import CamSnapshotV from './camSnapshotV';

export default class CamSnapshotC extends Component{
  state = {
    image: null
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({image: new Image().src=imageSrc});
  };

  clear = () => {
    this.setState({pic: null})
  }

  keepImage = () => {
    console.log('OK!')
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <CamSnapshotV 
          setRef={ this.setRef }
          videoConstraints={ videoConstraints }
          capture={this.capture}
          keep={this.keep}
          image={this.state.image}
          />
      </div>
    );
  }
}