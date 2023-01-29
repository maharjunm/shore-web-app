import React from 'react';
import { ErrorBoundary } from '../../components';
import Payment from '../../components/Payment/Payment';

const AboutUs = () => {
  return (
    <ErrorBoundary>
      <h1>about us</h1>
      <Payment/>
    </ErrorBoundary>
  );
};

export default AboutUs;
