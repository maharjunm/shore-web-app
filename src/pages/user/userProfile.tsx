import React , { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { UserContext } from '../HomePage/HomePage';
import  ProductSelectionPage  from '../ProductSelectionPage/ProductSelectionPage';
import { ErrorBoundary, Message } from '../../components';
import  PaymentStatus from './Payments/PaymentStatus';
import { useSelector, useDispatch } from 'react-redux';
import { selectPaymentStatus } from '../../store/Payments/selector';
import { updatePaymentStatus } from '../../store/Payments/reducer';
import { RootState } from '../../store/configureStore';
import './userProfile.scss';

const Profile = ()=>{

  const { state } = useContext(UserContext);
  const [ authCookie, setAuthCookie, removeAuthCookie] = useCookies([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const [ loginMessage, setLoginMessage ] = useState('You have successfully Logged in..');
  if(!state.user){
    history.push('/login');
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
