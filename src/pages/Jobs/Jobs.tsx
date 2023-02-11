import React from 'react';
import { ErrorBoundary } from '../../components';
import Payment from '../../components/Payment/Payment';
const Jobs = () => {
  return (
    <ErrorBoundary>
      <h1>jobs</h1>
      <Payment/>
    </ErrorBoundary>
  );
};

export default Jobs;
