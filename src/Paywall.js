import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

import {
  noop,
} from 'lodash';

import { stripePublishableKey } from '../config/current.env.js';

class Paywall extends React.Component {
  constructor() {
    super();

    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    fetch('/paymentToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(token),
    }).then(response => {
      return response.json();
    }).then(data => {
      this.props.onTokenSuccess();
    }).catch(err => {
      alert('An error has occured with payment. You were not charged. Please try again.')
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey={stripePublishableKey}
        amount={100}
        currency="USD"
        ref={el => this.StripCheckout = el}
      >
        {this.props.hideButton ?
          <button
            id="stripeCheckoutButton"
            onClick={noop}
          >
          </button> :
          null
        }
      </StripeCheckout>
    )
  }
}

Paywall.defaultProps = {
  onTokenSuccess: noop,
};

export default Paywall;
