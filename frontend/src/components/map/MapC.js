import React, {Component} from 'react'
import MapV from './MapV.js'
import {connect} from 'react-redux'
import itemA from '../../redux/actions/itemA.js';

class MapC extends Component{
	constructor(props){
    super(props);
    const {lat, lng} = this.props.initialCenter;
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
	}
	

	onMarkerClicked = (props, marker, e) =>
	this.setState({
		selectedPlace: props,
		activeMarker: marker,
		showingInfoWindow: true
	});

	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	};

	getCurrentPosition = () => {
		if(navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition((position)=> {
				this.setState({
					currentLocation: {
							lat: position.coords.latitude,
							lng: position.coords.longitude
					}
				});
			})
		}
		else{
			// Browser doesn't support Geolocation
			console.log("Browser doesn't suppport Geolocation");
		}  
	}

	componentDidMount(){
		this.props.setUserItem.setMapItems();
	}

  render(){
		this.getCurrentPosition();		
		return(
			<div>
				<MapV google={this.props.google}
							onMapClicked={this.onMapClicked}
							center={this.state.currentLocation}
							onMarkerClicked={this.onMarkerClicked}
							currentLocation={this.state.currentLocation}
							activeMarker={this.state.activeMarker}
							showingInfoWindow={this.state.showingInfoWindow}
							selectedPlaceName={this.state.selectedPlace.name}
							selectedPlaceImg={this.state.selectedPlace.image_url}
							selectedPlaceRating={this.state.selectedPlace.rating}
							mapItems={this.props.mapItems}
							userItem={this.state.selectedPlace.userItem} />
			</div>
		)
	}
}

MapC.defaultProps = {
  zoom: 16,
  // San Francisco, by default
  initialCenter: {
    lat: 25.760100,
    lng: -80.374445
  },
}

const mapStateToProps = state => {
	return{
		mapItems: state.itemR.dummyMapItems
	}
}

const mapActionToProps = dispatch =>{
	return{
		setUserItem: itemA(dispatch)
	}
}

export default connect(mapStateToProps, mapActionToProps)(MapC)

