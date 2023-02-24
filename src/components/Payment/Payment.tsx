import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { REACT_BACKEND_URL, REACT_STRIPE_PUBLIC_KEY } from '../../config';
import axios from 'axios';
import './Payment.scss';
const Payment = ()=>{
  const [product]  = useState({
    name: 'Sample Book',
    price: 200,
    description: 'This is a Sample'
  });
  async function handleToken(token:any){
    const response = await axios.post(`${REACT_BACKEND_URL}/v1/checkout`,{token,product});
    console.log(response);
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
          stripeKey = {REACT_STRIPE_PUBLIC_KEY}
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
