import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
// import {withStyles} from '@material-ui/core/styles'


const MapV = (props) => {
	
	const MapItems = props.mapItems;
  return(		
		<div>
			<Map google={props.google}
					onClick={props.onMapClicked}
					center = {props.currentLocation}>
				{/* Render and Load multiple Markers */}
				{
					MapItems.map(data => {
						return(
							<Marker onClick={props.onMarkerClicked}
									name={data.title} 
									image_url={data.image_url}
									rating={data.rating}
									userItem={data.userItem}
									position = {data.location}/>  	
							)
						}						
					)
				}	
				{/* render infowindow */}			
				<InfoWindow
					marker={props.activeMarker}
					visible={props.showingInfoWindow}>
						<div>
							<h1>{props.selectedPlaceName}</h1>
							<img src={props.selectedPlaceImg} alt="" />
							<div>
								<text><b>Rating: </b>{props.selectedPlaceRating}</text>		
							</div>
							{
							// inline if statement
								props.userItem &&
								<div>
									<Button variant="contained" color="secondary">Edit</Button>	
								</div> 
							}																		
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



