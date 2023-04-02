import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import './PaymentStatus.scss';

const PaymentSuccess = () => {
  const history = useHistory();
  const redirect = () =>{
    history.push('/profile');
    return;
  };
  setTimeout(()=>{
    redirect();
  },5000);
  return (
    <div className='paymentStatus'>
      <span className='icon success'> <FA icon={faCheck} /> </span>
      <h1>Payment Successfull</h1>
      <p>You will be redirected to home page shortly...</p>
    </div>
  );
};

export default PaymentSuccess;