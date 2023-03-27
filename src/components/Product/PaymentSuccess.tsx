import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { REACT_BACKEND_URL } from '../../config';

const PaymentSuccess = () => {
  const history = useHistory();
  const [ authCookie ] = useCookies();
  const { productName } = useParams();

  React.useEffect(()=>{
    const postPaymentData = async ( ) => {
      if(productName!='Platinum' && productName!='Diamond'){
        history.push('/profile');
        return ;
      }else{
        const body = {
          email: authCookie.email,
          product: productName,
        };
        const res = await  axios.post(`${REACT_BACKEND_URL}/v1/checkout`,{body});
        console.log(res);
        setTimeout(() => {
          history.push('/profile');
        }, 4000);
      }
    };
    postPaymentData();
  },[]);
  
  return (
    <h1>payment successfull ,purchased the product {productName}</h1>
  );
};
export default PaymentSuccess;