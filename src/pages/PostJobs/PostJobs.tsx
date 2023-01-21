import React from 'react';
import { ErrorBoundary } from '../../components';
import ProductSelectionPage from '../ProductSelectionPage/ProductSelectionPage';

const PostJobs = () => {
    return (
        <ErrorBoundary>
            <ProductSelectionPage />
        </ErrorBoundary>
    );
};

export default PostJobs;
