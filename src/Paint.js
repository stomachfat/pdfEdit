import React, { Component } from 'react';

import Painterro from 'painterro';

import {
  noop,
} from 'lodash';


class Paint extends Component {
  constructor(props) {
    super(props);

    this.ptro = Painterro({
      saveHandler: function (image, done) {
        let formData = new FormData();
        formData.append('file', image.asBlob());

        this.updateFormData(formData);

        props.triggerStripePayment();
        done(false);
      }.bind(this),
      closeHandler: function () {
        debugger;
      },
      hiddenTools: ['open', 'close'],
    });
  }

  componentWillMount() {
    this.fetchAndOpenImage();

  }

  componentDidMount() {
    const paintWrapper = document.getElementsByClassName('ptro-holder-wrapper')[0];
    const newWrapper = document.getElementById('painterro');

    newWrapper.appendChild(paintWrapper);
  }

  updateFormData(formData) {
    this.formData = formData;
  }

  getImageFormData() {
    return this.formData;
  }

  fetchAndOpenImage() {
    fetch('/images/test.png').then(rsp => {
      const a = rsp;
      console.log('fetchAndOpenImage: ', rsp);

      return rsp.blob();
    }).then(blob => {

      this.ptro.openFile(blob);
      this.ptro.show();
    })
  }

  render() {
    return(
      <div id='painterro'>
      </div>
    );
  }
}

Paint.defaultProps = {
  triggerStripePayment: noop,
};

export default Paint;
