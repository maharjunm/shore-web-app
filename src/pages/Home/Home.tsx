import React from 'react';
import { ErrorBoundary,Searchbar, Location } from '../../components';
import data from '../../components/SearchBar/data';
import './home.scss'
const Home = () => {
    return (
        <ErrorBoundary>
            <div className='inputForm'>
            <div className="searchBar">
            <Searchbar data={data} />
            </div>
            <div className='locationBar'>
            <Location />
            </div>
            </div>
        </ErrorBoundary>
    );
};

export default Home;
