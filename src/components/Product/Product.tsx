import React from 'react';
import { ErrorBoundary } from '../../components';
import  ProductData  from '../DataModels/ProductData';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark , faCheck } from '@fortawesome/free-solid-svg-icons';
import './Product.scss';
import { REACT_STRIPE_PUBLIC_KEY } from '../../config';
import { loadStripe } from '@stripe/stripe-js';
interface Props{
  product: ProductData,
  isSelected: boolean,
}
let stripePromise:any;
const getStripe = async () => {
  if(!stripePromise){
    stripePromise = loadStripe(REACT_STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};
const Product = ( props: Props ) => {

  const { product, isSelected } = props;
  const path = product.type==='Regular'?'/postajob':'/postjobs';
  const productName = product.type;
  const item = {
    price: 'price_1Mo1YMSDnxAXJ4Wok2NNYdBL',
    quantity: 1,
  };
  const checkoutOptions = {
    lineItems: [ item ],
    mode: 'payment',
    successUrl:`${window.location.origin}/#/success/${productName}`,
    cancelUrl: `${window.location.origin}/#/cancel/${productName}`,
  };
  const redirectToCheckout = async () => {
    const stripe = await getStripe();
    const res = await stripe.redirectToCheckout(checkoutOptions);
    console.log(res);

  };
  return (
    <ErrorBoundary>
      <div className="col">
        <div className="heading">{product.type}</div>
        <h3 className="price">
          <small>$</small>
          {product.amount===0?'FREE':product.amount}
          <small>/{product.hostingTime} Days</small>
        </h3>
        {
          product.offers.map((offer)=>(
            <p key={offer.field}>{offer.field}
              <span>
                {
                  offer.value?
                    <span className="yes">
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>:
                    <span className="no">
                      <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </span>
                }</span>
            </p>
          ))
        }
        <div className={isSelected?'btn productSelected':'btn productNotSelected'}>
          <a onClick={redirectToCheckout}> checkout</a>
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default Product;