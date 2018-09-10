/* Color Palette */
// #05386B
// #379683
// #5CDB95
// #8EE4AF
// #EDF5E1

import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
  card: {
    width: '350px',
    height: '350px',
    margin: '20% 40%'
  },
  header: {
    paddingTop: '8%'
  },
  textField: {
    width: 200,
    fontSize: '16px'
  },
  root: {
    color: 'red',
    fontSize: '15px'
  },
  buttonCSS: {
    margin: '2%'
  },
  buttonContainer: {
    marginTop: '20px'
  }
}

const LandingPV = props => {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title='FoundIt' />
        <CardContent>
          <form className={classes.root}>
            <TextField id='email' label='Email' margin='normal' onChange={props.updateEmail} fullWidth />
            <TextField id='password-input' label='Password' type='password' onChange={props.updatePassword} autoComplete='current-password' margin='normal' fullWidth />
            <div className={classes.buttonContainer}>
              <Button variant='contained' className={classes.buttonCSS} onClick={props.signInSubmit}> Sign In </Button>
              <Button variant='contained' className={classes.buttonCSS} onClick={props.createSubmit}> Create Account </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(LandingPV)
