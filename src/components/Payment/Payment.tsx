import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useCookies } from 'react-cookie';
import  ProductData  from '../DataModels/ProductData';
import { useHistory } from 'react-router-dom';
import { checkoutPayment } from '../../services/Payments';
import { REACT_STRIPE_PUBLIC_KEY } from '../../config';
import axios from 'axios';
import './Payment.scss';
interface Props{
  product:ProductData,
}
const Payment = (props:Props)=>{

  const [ authCookie ] = useCookies([]);
  const [ paymentResponse, setPaymentResponse ] = useState({color:'',message:''});
  const history = useHistory();
  const { product } = props;
  async function handleToken(token:any){
    setPaymentResponse({color:'orange',message:'waiting for payment...'});
    const response = await checkoutPayment({token,product});
    if(response.data.status==='success'){
      setPaymentResponse({color:'green',message:'Success, Payment is complete'});
      setTimeout(() => {
        history.push('/postajob');
      }, 2000);
    }else{
      setPaymentResponse({color:'red',message:'Failure, Payment is incomplete'});
    }

  }
  return (
    <div className="paymentCss">
      <div className="flexContent">
        <h2>Product   Info</h2>
        <h3>Product Name: {product.type}</h3>
        <h3>Product Price: {product.amount}</h3>
        <h3>Product Hosting Time: {product.hostingTime}</h3>
        <span className={'responseBox '+paymentResponse.color}>{paymentResponse.message}</span>
      </div>

      <div className='stripe'>
        <StripeCheckout
          stripeKey = {REACT_STRIPE_PUBLIC_KEY}
          token = {handleToken}
          amount = {product.amount*100}
          name = {product.type}
          email = {authCookie.email}
          billingAddress
          shippingAddress
          description={'Hosting time '+product.hostingTime+' days'}
          image="https://i.ibb.co/pdSzLkz/logo1.png"
          ComponentClass="div"
          currency="USD"
          allowRememberMe
        />
      </div>
    </div>
  );
};
export default Payment;
