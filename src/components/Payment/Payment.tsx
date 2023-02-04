import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './Payment.scss';
const Payment = ()=>{
  //product object name,price
  const [product]  = useState({
    name: 'Sample Book',
    price: 200,
    description: 'This is a Sample'
  });
  async function handleToken(token:any){
    const response = await axios.post('http://localhost:3000/v1/users/checkout',{token,product});
    console.log(response);
    return response;
  }
  handleToken({});
  return (
    <div className="container">
      
      <br></br>
      <StripeCheckout
        stripeKey = "pk_test_51MUr0rSCXoMBK86oohQxGrv7r21gkhp9DgomNGs6Lbgfhnhqxa8XnN4JwYHswFq5KvxjDUpgYLj5Belu5O7JWima00WiAAgjND"
        token = {handleToken}
        amount = {product.price*100}
        name = {product.name}
        billingAddress
        shippingAddress
      />
    </div>
  );
};
export default Payment;