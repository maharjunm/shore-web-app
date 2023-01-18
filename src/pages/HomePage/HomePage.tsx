import React, { useState } from 'react';
import { ErrorBoundary, NavBar } from '../../components';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, Jobs, PostJobs, AboutUs, ContactUs } from '../../pages';

const HomePage = () => {
    return (
      <Router>
        <div>
          <ErrorBoundary>
            <NavBar />
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/home"><Home /></Route>
              <Route path="/jobs"><Jobs /></Route>
              <Route path="/postjobs"><PostJobs /></Route>
              <Route path="/aboutus"><AboutUs /></Route>
              <Route path="/contactus"><ContactUs /></Route>
            </Switch>
          </ErrorBoundary>
        </div>
      </Router>
    );
};

export default HomePage;
