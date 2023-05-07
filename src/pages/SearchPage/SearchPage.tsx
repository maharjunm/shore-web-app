import React, { useState } from 'react';
import './SearchPage.scss';
import { Highlights } from '../../components';

const SearchPage = () => {
  return (
    <div className="viewBox">
      <Highlights />
      <div className="jobsCount">
        <h1>Found 59 Jobs that matches your search</h1>
      </div>
      <div className="search">
        <div className="searchFields">
          <form >
            <div className='inputBox'>
              <label> Job Title </label>
              <input type="text"  placeholder='eg:Research Scientist'/>
            </div>
            <div className='inputBox'>
              <label> Location </label>
              <input type="text" placeholder='eg:US,CANADA'/>
            </div>
            <div className='inputBox'>
              <label> Salary </label>
              <input type="range" />
              <label className='flex space-around'>
                <span>1K</span>
                <span>2K</span>
                <span>5K</span>
                <span>10K</span>
                <span>20K</span>
              </label>
            </div>
          </form>
        </div>
        <div className="searchContent">
          search content
        </div>
      </div>
    </div>
  );
};

export default SearchPage;