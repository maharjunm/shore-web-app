import React from 'react';
import { ErrorBoundary } from '../../components';
import Form from './Form';

const PostJobs = () => {
  return (
    <ErrorBoundary>
      <Form />
    </ErrorBoundary>
  );
};

export default PostJobs;
