import React from 'react';
import { ErrorBoundary } from '../../components';
import Form from './Form';
import BillingPage from './BillingPage/BillingPage';

const PostJobs = () => {
  return (
    <ErrorBoundary>
      <BillingPage />
    </ErrorBoundary>
  );
};

export default PostJobs;
