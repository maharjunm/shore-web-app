import React from 'react';
import { ErrorBoundary } from '../../components';
import { Searchbar, Location } from '../../components/index';
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
