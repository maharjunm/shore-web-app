import React from 'react';
import './ProductSelectionPage.scss';
import { ErrorBoundary, Product } from '../../components';
import products from './products';
const ProductSelectionPage = () => {

  return (
    <ErrorBoundary>
      <div className="job_page">
        <div className="content">
          {
            products.map(( product ) => (
              <Product key={product.type} product={ product } isSelected={false} />
            ))
          }
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default ProductSelectionPage;
