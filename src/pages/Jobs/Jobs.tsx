import React from 'react';
import { ErrorBoundary } from '../../components';
import ProductSelectionPage from './../ProductSelectionPage/ProductSelectionPage';
const Jobs = () => {
  return (
    <ErrorBoundary>
      <ProductSelectionPage/>
    </ErrorBoundary>
  );
};

export default Jobs;
