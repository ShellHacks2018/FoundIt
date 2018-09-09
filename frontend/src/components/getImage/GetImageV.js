import React from 'react';

import CamSnapshotC from '../camSnapshot/camSnapshotC'
import CameraIcon from '@material-ui/icons/CameraAlt';
import PhotoIcon from '@material-ui/icons/Photo';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const GetImageV = (props) => {
      if (props.viewType === 'upload')
      {
        return(
          <div>  
            <Paper>         
            <InputLabel>Select File</InputLabel>
            <Input color="primary" type='file' onChange={props.uploadSelected}/>
            <Button color="primary"> Upload </Button>
            <Button color="secondary" onClick={props.viewTypeCancel}> Cancel </Button>
            </Paper>
          </div>
        )
      }
      else if (props.viewType === 'camera')
      {
        return(
          <div>
            <Paper>
            <CamSnapshotC />
            <Button color="secondary" onClick={props.viewTypeCancel}> Cancel </Button>
            </Paper>
          </div>
        )
      }
      else{
        return(
          <div>
            <Paper>
            <Button color="primary" onClick={props.viewTypeUpload}> <PhotoIcon /> </Button>
            <Button color="primary" onClick={props.viewTypeCamera}> <CameraIcon /> </Button>
            </Paper>
          </div>
        )
      }
}

export default GetImageV;
