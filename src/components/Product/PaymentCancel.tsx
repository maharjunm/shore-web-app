import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const PaymentCancel = () => {
  const history = useHistory();
  const { productName } = useParams();
  if(productName!='Platinum' && productName!='Diamond'){
    history.push('/profile');
    return ;
  }else{
    setTimeout(() => {
      history.push('/profile');
    }, 4000);
  }
  return (
    <h1 >payment failed </h1>
  );
};
export default PaymentCancel;