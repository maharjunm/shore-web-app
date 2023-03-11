import React , { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../HomePage/HomePage';
import  ProductSelectionPage  from '../ProductSelectionPage/ProductSelectionPage';
import { ErrorBoundary, Message } from '../../components';
import './userProfile.scss';
const Profile = ()=>{

  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [ loginMessage, setLoginMessage ] = useState('You have successfully Logged in..');
  if(!state.user){
    history.push('/login');
    return ;
  }
  return(
    <ErrorBoundary>
      <div className="userProfile">
        <Message message={loginMessage} color="success" />
        <div className="selectProduct" >Select Your Produt</div>
        <ProductSelectionPage />
      </div>
    </ErrorBoundary>
  );
};
export default Profile;
