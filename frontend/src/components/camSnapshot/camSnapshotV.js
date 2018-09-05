import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const CamSnapshotV = (props) => {
  return(
    <div>
      <canvas id="canvas">
      </canvas>
      <div class="output">
        <img id="photo" alt="The screen capture will appear in this box." />
      </div>
    </div>
  )  
}

export default CamSnapshotV;
