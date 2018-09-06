import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const styles = {
  flex: {
    flexGrow: 1,
    textAlign: 'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  loginButton: {
    marginRight: 50
  }
}

const NavbarV = props => {
  const { classes } = props
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='title' color='inherit' className={classes.flex}>
          Fount It!
        </Typography>
        <Link to='/map'>
          <Button className={classes.loginButton} color='inherit'>Login</Button>
        </Link>
        <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(NavbarV)
