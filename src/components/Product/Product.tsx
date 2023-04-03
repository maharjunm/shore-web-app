import React from 'react';
import { ErrorBoundary } from '../../components';
import  ProductData  from '../DataModels/ProductData';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark , faCheck } from '@fortawesome/free-solid-svg-icons';
import { REACT_BACKEND_URL } from '../../config';
import './Product.scss';
interface Props{
  product: ProductData,
  isSelected: boolean,
}
const Product = ( props: Props ) => {

  const { product, isSelected } = props;
  const path = product.type==='Regular'?'/postajob':'/postjobs';

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
          <form action={`${REACT_BACKEND_URL}/v1/checkout/page`} method='post'>
            <input hidden name="product"  value={JSON.stringify(product)}/>
            <button className='submit' type="submit">select</button>
          </form>
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default Product;