import React, { Component } from 'react';

import Paint from './Paint';

import Payment from './Paywall';

import {
    downloadPDF,
} from './utils/download';

class PaintPage extends Component {
    constructor(props) {
        super(props);

        this.triggerStripePayment = this.triggerStripePayment.bind(this);
        this.getImageFormData = this.getImageFormData.bind(this);
        this.convertPngToPdf = this.convertPngToPdf.bind(this);
    }

    triggerStripePayment() {
        this.Payment.StripCheckout.onClick();
    }

    getImageFormData() {
        return this.Paint.getImageFormData();
    }

    convertPngToPdf () {
        let formData = this.getImageFormData();

        console.log('convertPngToPdf downloadPDF: ', downloadPDF);

        const convertPngToPdfPromise = fetch('/convertPngToPdf', {
          method: 'POST',
          body: formData,
        }).then(response => {
          console.log('saveHandler success', response);
          console.log('convertPngToPdfPromise downloadPDF: ', downloadPDF);
          downloadPDF();
        }).catch(err => {
          console.log('saveHandler err:', err);
        });

        return convertPngToPdfPromise;
    }

    render() {
        return (
            <div>
                <Paint
                    ref={el => this.Paint = el}
                    triggerStripePayment={this.triggerStripePayment}
                />
                <Payment
                    hideButton
                    ref={el => this.Payment = el}
                    onTokenSuccess={this.convertPngToPdf}
                />
            </div>
        );
    }
}

export default PaintPage;
