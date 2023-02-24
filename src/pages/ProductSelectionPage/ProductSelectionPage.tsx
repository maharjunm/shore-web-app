import React from 'react';
import './ProductSelectionPage.scss';
import { ErrorBoundary, Product } from '../../components';

const products=[
  {
    type: 'Regular',
    amount: 0,
    hostingTime: 30,
    offers: [
      { field: 'logo in search', value: true },
      { field: 'logo in description', value: true },
      { field: 'boosted display', value: false },
      { field: 'highlight in search', value: false },
      { field: 'job of the week', value: false },
      { field: 'job of the month', value: false }
    ]
  },
  {
    type: 'Platinum',
    amount: 100,
    hostingTime: 30,
    offers: [
      { field: 'logo in search', value: true },
      { field: 'logo in description', value: true },
      { field: 'boosted display', value: true },
      { field: 'highlight in search', value: true },
      { field: 'job of the week', value: false },
      { field: 'job of the month', value: false }
    ]
  },
  {
    type: 'Diamond',
    amount: 200,
    hostingTime: 60,
    offers: [
      { field: 'logo in search', value: true },
      { field: 'logo in description', value: true },
      { field: 'boosted display', value: true },
      { field: 'highlight in search', value: true },
      { field: 'job of the week', value: true },
      { field: 'job of the month', value: true }
    ]
  },
];
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
