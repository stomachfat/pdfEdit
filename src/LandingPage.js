import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import './LandingPage.css';







class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  saveToServer(file) {
    let data = new FormData();
    data.append('file', file);

    const saveToServerPromise = fetch('/upload', { // Your POST endpoint
      method: 'POST',
      body: data,
    }).then(response => {

    });

    return saveToServerPromise;
  }

  onDrop(done) {
    return function(acceptedFiles, rejectedFiles, event) {
      const file = acceptedFiles[0];

      this._saveToServerNetworkCall = this.saveToServer(file, done);
      done();
    }.bind(this);
  };

  get_saveToServerNetworkCall() {
    return this._saveToServerNetworkCall;
  }

  render() {
    return (
      <div>
        <Dropzone
          onDrop={this.onDrop(this.props.done)}
        >
            <div>
                <div
                  className="dropFileText"
                >
                    Drop a one-page PDF here!
                </div>

                <div>
                  <input type="button" id="load-file-btn" value="Upload a PDF"/>
                  <input id="file-input" type="file"></input>
                </div>
            </div>
        </Dropzone>
      </div>
    );
  }
}

export default LandingPage;
