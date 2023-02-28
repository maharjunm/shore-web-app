import React from 'react';
import { ErrorBoundary } from '../../components';
import  ProductData  from '../DataModels/ProductData';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark , faCheck } from '@fortawesome/free-solid-svg-icons';
import './Product.scss';
interface Props{
  product: ProductData,
  isSelected: boolean,
}
const Product = ( props: Props ) => {

  const { product, isSelected } = props;

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
          <Link to={
            {
              pathname:'/postajob',
              state:product,
            }
          }
          >{isSelected?'Selected':'select'}</Link>
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default Product;