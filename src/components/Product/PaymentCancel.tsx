import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faXmark  } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import './PaymentStatus.scss';

const PaymentCancel = () => {
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
      <span className='icon cancel'> <FA icon={faXmark} /> </span>
      <h1>Payment Failed</h1>
      <p>You will be redirected to home page shortly...</p>
    </div>
  );
};

export default PaymentCancel;