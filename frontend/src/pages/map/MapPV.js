import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import AddItem from '../../components/AddItem/AddItemC'
import Map from '../../components/map/MapC'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1,
    textAlign: 'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logoutButton: {
    marginRight: 50
  }
}
const MapPV = props => {
  // const {classes} = props
  return (
    <div>
 
      <AddItem />
			<Map />

    </div>
  )
}

export default withStyles(styles)(MapPV)
