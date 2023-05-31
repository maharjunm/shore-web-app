import React,{useState, createContext , useReducer} from 'react';
import { useCookies } from 'react-cookie';
import { ErrorBoundary,NavBar, PaymentSuccess, PaymentCancel, Footer } from '../../components';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {User,Home,PostJobs,Form,ContactUs,ProductSelectionPage,BillingPage,Login,Logout,Signup,Profile,Admin,SearchPage} from '../../pages';
import { FullJobView } from '../SearchPage/SeachUtils/FullJobView';
import { initialState, reducer } from '../../Reducer/userReducer';
export const UserContext = createContext(null);
const HomePage = () => {
  const [ authCookie, setAuthCookie, removeAuthCookie] = useCookies([]);
  if(authCookie.SESSION){
    if(authCookie.isAdmin){
      initialState.isAdmin=true;
    }else{
      initialState.user=true;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      <div>
        <UserContext.Provider value={{ state, dispatch }}>
          <ErrorBoundary>
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route  path='/home'  element={<Home/>} />
              <Route  path='/postjobs' element={<PostJobs />} />
              <Route  path='/contactus' element={<ContactUs/>} />
              <Route path='/postajob' element={<Form />} />
              <Route path='/login'  element={<Login />} />
              <Route path='/signup'  element={<Signup />} />
              <Route path='/logout'  element={<Logout />} />
              <Route path='/profile'  element={<Profile/>} />
              <Route path='/dashboard'  element={<Admin />} />
              <Route path='/userdashboard'  element={<User/>} />
              <Route path='/success'  element={<PaymentSuccess />} />
              <Route path='/cancel'  element={<PaymentCancel />} />
              <Route path='/search'  element={<SearchPage />} />
              <Route path='/job/:jobId'  element={<FullJobView />} />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default HomePage;
