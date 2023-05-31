import React , { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../HomePage/HomePage';
import  ProductSelectionPage  from '../ProductSelectionPage/ProductSelectionPage';
import { ErrorBoundary, Message } from '../../components';
import './userProfile.scss';

const Profile = ()=>{

  const { state } = useContext(UserContext);
  const navigate = useNavigate();
  if(!state.user){
    navigate('/login');
    return ;
  }
  return(
    <ErrorBoundary>
      <div className="userProfile">
        <ProductSelectionPage />
      </div>
    </ErrorBoundary>
  );
};
export default Profile;
