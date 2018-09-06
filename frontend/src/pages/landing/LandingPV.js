import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const styles = {
  card: {
    maxWidth: '275px',
    color: 'salmon',
    display: 'block'
  },
  root: {
    flexGrow: 1
  }
}

const LandingPV = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <h1>Sign In Should Go Here</h1>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(LandingPV)
