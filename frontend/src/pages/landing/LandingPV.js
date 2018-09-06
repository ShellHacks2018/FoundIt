import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect, Link } from 'react-router-dom';

//import style from './LandingPV.css'

const styles = {
  card: {
    maxWidth: '275px',
    color: 'salmon',
    display: 'block',

  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    //marginLeft: 'auto',
    textAlign: 'left',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  loginButton: {
    marginRight: 50,

  }
  

}

const LandingPV = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Fount It!
          </Typography>
          <Link to='/map'>
            <Button className={classes.loginButton} color="inherit">Login</Button>
          </Link>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Card className={classes.card}>
        <CardContent>
          <h1>Sign In Should Go Here</h1>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(LandingPV)
