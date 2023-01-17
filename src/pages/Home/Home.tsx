import React from 'react';
import { ErrorBoundary,Searchbar, Location } from '../../components';
import data from '../../components/SearchBar/data';

const Home = () => {
    return (
        <ErrorBoundary>
            <Searchbar data={data} />
            <Location />
        </ErrorBoundary>
    );
};

export default Home;
