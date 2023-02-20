import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './Payment.scss';
const Payment = ()=>{
  const [product]  = useState({
    name: 'Sample Book',
    price: 200,
    description: 'This is a Sample'
  });
  async function handleToken(token:any){
    const response = await axios.post('http://localhost:3000/v1/checkout',{token,product});
    console.log(response.status);
    if(response.status===200){
      console.log('Success, Payment is complete',{type:'success'});
    }else{
      console.log('Failure, Payment is complete',{type:'error'});
    }
    
  }
  return (
    <div className="paymentCss">
      <div className="flexContent">
        <h2>Product   Info</h2>
        <h3>Product Name: {product.name}</h3>
        <h3>Product Price: {product.price}</h3>
        <h3>Product Description: {product.description}</h3>
      </div>
        
      <div className='stripe'>
        <StripeCheckout
          stripeKey = "pk_test_51MUr0rSCXoMBK86oohQxGrv7r21gkhp9DgomNGs6Lbgfhnhqxa8XnN4JwYHswFq5KvxjDUpgYLj5Belu5O7JWima00WiAAgjND"
          token = {handleToken}
          amount = {product.price*100}
          name = {product.name}
          billingAddress
          shippingAddress
        />
      </div>
      
    </div>
  );
};
export default Payment;