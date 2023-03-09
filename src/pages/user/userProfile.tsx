import React , { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../HomePage/HomePage';
import  ProductSelectionPage  from '../ProductSelectionPage/ProductSelectionPage';
import './userProfile.scss';
const Profile = ()=>{

  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [ loginMessage, setLoginMessage ] = useState('You have successfully Logged in..');

  if(!state){
    history.push('/login');
    return ;
  }
  return(
    <div className="userProfile">
      <div className="message" >  {loginMessage}  </div>
      <div className="selectProduct" >Select Your Produt</div>
      <ProductSelectionPage />
    </div>
  );
};
export default Profile;
