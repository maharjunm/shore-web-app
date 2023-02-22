import React from 'react';
import { ErrorBoundary, Payment } from '../../components';

const TestPayment = () => {
  return (
    <ErrorBoundary>
      <Payment/>
    </ErrorBoundary>
  );
};

export default TestPayment;
