import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const styles = {
  card: {
    maxWidth: '275px',
    color: 'salmon'
  }
}

const LandingPV = props => {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardContent>
        <h1>Sign In Should Go Here</h1>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(LandingPV)
