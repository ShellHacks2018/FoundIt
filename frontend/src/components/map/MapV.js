import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import PropTypes from 'prop-types'


const MapV = (props) => {
  return(
		<div>
			<Map google={props.google}
					onClick={props.onMapClicked}
					center = {props.currentLocation}>
				<Marker onClick={props.onMarkerClicked}
								name={'Current location'} 
								position = {props.currentLocation}/>

				<InfoWindow
					marker={props.activeMarker}
					visible={props.showingInfoWindow}>
						<div>
							<h1>{props.selectedPlaceName}</h1>
						</div>
				</InfoWindow>
			</Map>
		</div>
    )
}

MapV.propTypes = {
	google: PropTypes.object,
	zoom: PropTypes.number,
	initialCenter: PropTypes.object
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBY-_Q11FBbKW5Z2mSsKnlZnQ1qXRS4N90"
})(MapV)

