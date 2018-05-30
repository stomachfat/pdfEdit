import React, { Component } from 'react';

class Uploader extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <form ref='uploadForm'
        id='uploadForm'
        action='upload'
        method='post'
        encType="multipart/form-data">
          <input type="file" name="sampleFile" />
          <input type='submit' value='Upload!' />
      </form>
    );
  }
}

export default Uploader
