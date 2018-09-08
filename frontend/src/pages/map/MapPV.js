import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import MapC from '../../components/map/MapC.js'

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
  const {classes} = props
  return (
    <div>
      {/* <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit' className={classes.flex}>
                  Profile
          </Typography>
          <Link to='/'>
            <Button className={classes.logoutButton} color='inherit'>Logout</Button>
          </Link>
          <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}

      <h1 className="my-5">Google Map</h1>
			<MapC />

    </div>
  )
}

export default withStyles(styles)(MapPV)
