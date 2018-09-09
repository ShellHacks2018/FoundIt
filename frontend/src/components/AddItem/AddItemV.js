import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { withStyles } from '@material-ui/core/styles'

import GetImageC from '../getImage/GetImageC';
// import ItemTypes from '../../itemTypes'

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing.unit * 2,
    },
  });

const AddItemV = (props) => {
  const { classes } = props

  const items = [
      'Clothing',
      'Jewelery',
      'Electronics',
      'Book',
      'Other'
    ]

  return (
      <div>
      <Button variant="fab" color="primary" 
              aria-label="Add" className={classes.button}
              onClick={props.formOpenCB}>
          <AddIcon />
      </Button>
      <Dialog
          open={props.form}
          onClose={props.formCloseCB}
          aria-labelledby="form-dialog-title"
      >
          <DialogTitle id="form-dialog-title">Add Item to Map</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Add Picture
            </DialogContentText>
            <GetImageC />

            <TextField
                autoFocus margin="dense" id="titleTF"
                label="Title" fullWidth
            />
            <FormGroup row>
            {/* Object.keys to map on list of the state checkboxes keys */}
              { Object.keys(props.checkedState).map( option => ( 
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={props.checkedState[option]}
                      onChange={props.checkClicked(option)}
                      value="checkedA"
                    />
                }
                label={option}
                /> )) 
              }
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.formCloseCB} color="primary">
                Cancel
            </Button>
            <Button onClick={props.formCloseCB} color="primary">
                Submit
            </Button>
          </DialogActions>
      </Dialog>
      </div>
  );
}

export default withStyles(styles)(AddItemV);