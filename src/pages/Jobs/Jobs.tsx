import React from 'react';
import { ErrorBoundary } from '../../components';
import Payment from '../../components/Payment/Payment';
const Jobs = () => {
  return (
    <ErrorBoundary>
      <Payment/>
    </ErrorBoundary>
  );
};

export default Jobs;
