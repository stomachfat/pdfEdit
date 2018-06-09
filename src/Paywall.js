import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { stripePublishableKey } from '../config/current.env.js';

class Paywall extends React.Component {
  onToken(token) {
    console.log('stripe token:', token);

    fetch('/paymentToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        // debugger;
        // alert(`We are in business, ${data.email}`);
      });
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
      />
    )
  }
}

export default Paywall;

// class Paywall extends Component {
//   constructor() {
//     super();
//   }

//   componentDidMount() {


//     this.stripHandler = StripeCheckout.configure({
//       key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
//       image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
//       locale: 'auto',
//       token: function (token) {
//           // Use the token to create the charge with a server-side script.
//           // You can access the token ID with `token.id`
//           $("#stripeToken").val(token.id);
//           $("#stripeEmail").val(token.email);
//           $("#myForm").submit();
//       }
//     });
//   }

//   onClickPayment(e){
//     debugger;
//     stripHandler.open({
//       name: 'Stripe.com',
//       description: '2 widgets',
//       amount: 2000
//     });
//     e.preventDefault();
//   }

//   render() {
//     return (
//       <form id="myForm" action="/echo/html/" method="POST">
//           <script src="https://checkout.stripe.com/checkout.js"></script>
//           <input type="hidden" id="stripeToken" name="stripeToken" />
//           <input type="hidden" id="stripeEmail" name="stripeEmail" />
//           <button
//             id="customButton"
//             onClick={this.onClickPayment}
//           >
//             Purchase
//           </button>
//       </form>
//     );
//   }
// }

// export default Paywall;
