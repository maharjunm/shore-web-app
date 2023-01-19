import React from 'react';
import { ErrorBoundary } from '../../components';
import JobDetails from './JobDetails';
const Home = () => {
    return (
        <ErrorBoundary>
          <div>
            <JobDetails jobTitle="Java Developer" />
          </div>
        </ErrorBoundary>
    );
};

export default Home;
