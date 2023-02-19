import React,{useState} from 'react';
import { ErrorBoundary,NavBar } from '../../components';
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom';
import {Home,TestPayment,PostJobs,ContactUs,ProductSelectionPage,BillingPage} from '../../pages';

const HomePage = () => {
  return (
    <Router>
      <div>
        <ErrorBoundary>
          <NavBar/>
          <Switch>
            <Route exact path='/' ><Home/></Route>
            <Route  path='/home' ><Home/></Route>
            <Route  path='/payment'> <TestPayment /> </Route>
            <Route  path='/postjobs'><ProductSelectionPage /></Route>
            <Route  path='/contactus'><ContactUs/></Route>
            <Route path='/postajob' ><PostJobs /></Route>
          </Switch>
        </ErrorBoundary>
      </div>
    </Router>
  );
};

export default HomePage;
