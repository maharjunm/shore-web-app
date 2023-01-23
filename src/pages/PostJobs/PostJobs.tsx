import React from 'react';
import { ErrorBoundary } from '../../components';
import ProductSelectionPage from '../ProductSelectionPage/ProductSelectionPage';
import Form from './Form';
const PostJobs = () => {
    return (
        <ErrorBoundary>
            <Form />
        </ErrorBoundary>
    );
};

export default PostJobs;
