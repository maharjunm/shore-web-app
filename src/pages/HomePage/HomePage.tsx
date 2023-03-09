import React,{useState, createContext , useReducer} from 'react';
import { ErrorBoundary,NavBar } from '../../components';
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom';
import {Home,PostJobs,Form,ContactUs,ProductSelectionPage,BillingPage,Login,Logout,Signup,Profile,Admin} from '../../pages';
import { initialState, reducer } from '../../Reducer/userReducer';
export const UserContext = createContext(null);
const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      <div>
        <UserContext.Provider value={{ state, dispatch }}>
          <ErrorBoundary>
            <NavBar/>
            <Switch>
              <Route exact path='/' ><Home/></Route>
              <Route  path='/home' ><Home/></Route>
              <Route  path='/postjobs'><PostJobs /></Route>
              <Route  path='/contactus'><ContactUs/></Route>
              <Route path='/postajob' ><Form /></Route>
              <Route path='/login' ><Login /></Route>
              <Route path='/signup' ><Signup /></Route>
              <Route path='/logout' ><Logout /></Route>
              <Route path='/profile' ><Profile/></Route>
              <Route path='/dashboard'><Admin /></Route> 
            </Switch>
          </ErrorBoundary>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default HomePage;
