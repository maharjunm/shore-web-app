import React from 'react';
import { ErrorBoundary } from '../../components';
import ProductSelectionPage from '../ProductSelectionPage/ProductSelectionPage';
import Form from './Form';
import BillingPage from './BillingPage';
const PostJobs = () => {
  return (
    <ErrorBoundary>
      <BillingPage billingType="premium" />
    </ErrorBoundary>
  );
};

export default PostJobs;
