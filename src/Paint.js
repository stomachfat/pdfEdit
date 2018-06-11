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

  calibrateZoom() {
    // There's a text-bug that occurs
    // where the text shows up scaled
    // much bigger than it's supposed to.
    // Seems like zooming in and then out
    // fixes it.
    // Therefore programmatically do this
    const zoomEvent = {
      clientX:702, 
      clientY:183,
      // this does not reflect a real target
      // targets are actual DOM NODES
      ctrlKey: true,
      wheelDelta: 10,
      target: {
        tagName: 'DIV',
      },
      preventDefault: noop,
    };


    const that = this;
    console.log("this.ptro.shown: ", this.ptro.shown);
    setTimeout(() => {
      console.log("this.ptro.shown: ", this.ptro.shown);
      that.ptro.documentHandlers.mousewheel(zoomEvent);
      that.ptro.adjustSizeFull();
    }, 1000);

  }

  fetchAndOpenImage() {
    fetch('/images/test.png').then(rsp => {
      const a = rsp;
      console.log('fetchAndOpenImage: ', rsp);

      return rsp.blob();
    }).then(blob => {

      this.ptro.openFile(blob);
      this.ptro.show();

      this.calibrateZoom();
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
