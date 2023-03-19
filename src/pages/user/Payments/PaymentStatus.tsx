import React , { useState } from 'react';
import { ErrorBoundary, Message } from '../../../components';
import ProductData from '../../../components/DataModels/ProductData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark , faCheck } from '@fortawesome/free-solid-svg-icons';
import './PaymentStatus.scss';
interface Props{
  email: string,
  product: ProductData,
  status: Boolean,
  expiryDate : Date
}
const PaymentStatus = (props:Props)=>{

  const { email, product, status, expiryDate } = props;

  return(
    <ErrorBoundary>
      <div className="payment-status">
        <div className="short-info">
          <span>Payment Status</span>
          <span className={status?'status success':'status failure'}>
            <FontAwesomeIcon icon={status?faCheck:faXmark}></FontAwesomeIcon>
          </span>
        </div>
        <div className="expiry-info">
          <div>
            <b className="color-red">
              {status?'Expires on':'Expired on'}
            </b>
            <span>{expiryDate.toString()}</span>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default PaymentStatus;
