import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import  ProductData  from '../DataModels/ProductData';
import { useHistory } from 'react-router-dom';
import { REACT_BACKEND_URL, REACT_STRIPE_PUBLIC_KEY } from '../../config';
import axios from 'axios';
import './Payment.scss';
interface Props{
  product:ProductData,
}
const Payment = (props:Props)=>{

  const history = useHistory();
  const { product } = props;
  async function handleToken(token:any){
    const response = await axios.post(`${REACT_BACKEND_URL}/v1/checkout`,{token,product});
    console.log(response.data);
    window.alert(response.data.status);
    if(response.data.status==='success'){
      console.log('Success, Payment is complete');
      history.push('/form');
    }else{
      window.alert(response.data.information.msg);
      console.log('Failure, Payment is complete');
    }

  }
  return (
    <div className="paymentCss">
      <div className="flexContent">
        <h2>Product   Info</h2>
        <h3>Product Name: {product.type}</h3>
        <h3>Product Price: {product.amount}</h3>
        <h3>Product Hosting Time: {product.hostingTime}</h3>
      </div>

      <div className='stripe'>
        <StripeCheckout
          stripeKey = {REACT_STRIPE_PUBLIC_KEY}
          token = {handleToken}
          amount = {product.amount*100}
          name = {product.type}
          billingAddress
          shippingAddress
        />
      </div>
    </div>
  );
};
export default Payment;
