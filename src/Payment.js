// Payment.js

import React, { Component } from 'react';

class Payment extends Component {
  render() {
    return (
      <div>
        <h1>Payment Information</h1>
        <form>
          <div>
            <label>Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456" />
          </div>
          <div>
            <label>Cardholder Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div>
            <label>Expiration Date</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" placeholder="123" />
          </div>
          <button type="submit">Pay Now</button>
        </form>
      </div>
    );
  }
}

export default Payment;
