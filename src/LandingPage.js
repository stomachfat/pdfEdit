import React from 'react';
import Dropzone from 'react-dropzone';

import './LandingPage.css';

const onDrop = done => () => {
  done();
};

const onClick = (ev) => {
  ev.preventDefault();
  ev.stopPropagation();

  document.getElementById('file-input').click();
};

const LandingPage = ({ done }) => {
  return (
    <Dropzone
      onDrop={onDrop(done)}
      onClick={() => {}}
      disableClick
    >
        <div>
            <div
              className="dropFileText"
            >
                Drop a file here!
            </div>

            <div>
                <input type="button" id="load-file-btn" value="Upload a PDF" onClick={onClick} />
                <input id="file-input" type="file" onChange={done}></input>
            </div>
        </div>


    </Dropzone>
  );
};

export default LandingPage;
