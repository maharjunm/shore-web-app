import React , { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { UserContext } from '../HomePage/HomePage';
import  ProductSelectionPage  from '../ProductSelectionPage/ProductSelectionPage';
import { ErrorBoundary, Message } from '../../components';
import  PaymentStatus from './Payments/PaymentStatus';
import { REACT_BACKEND_URL } from '../../config';
import axios from 'axios';
import './userProfile.scss';
const product = {
  type: 'Regular',
  amount: 0,
  hostingTime: 30,
  offers: [
    { field: 'logo in search', value: true },
    { field: 'logo in description', value: true },
    { field: 'boosted display', value: false },
    { field: 'highlight in search', value: false },
    { field: 'job of the week', value: false },
    { field: 'job of the month', value: false }
  ]
};
const Profile = ()=>{

  const { state, dispatch } = useContext(UserContext);
  const [ authCookie, setAuthCookie, removeAuthCookie] = useCookies([]);
  const history = useHistory();
  const [ loginMessage, setLoginMessage ] = useState('You have successfully Logged in..');
  const [ paymentInfo, setPaymentInfo ] = useState(null);
  React.useEffect(()=>{
    const fetchPaymentInfo=async()=>{
      await axios.get(`${REACT_BACKEND_URL}/v1/checkout/get`,{params: {email:authCookie.email}})
        .then(res =>{
          if(res.data.message==='success'){
            setPaymentInfo(res.data);
          }
        });
    };
    fetchPaymentInfo();
  },[]);

  if(!state.user){
    history.push('/login');
    return ;
  }
  return(
    <ErrorBoundary>
      <div className="userProfile">
        <div className="top-flex">
          <div>welcome {authCookie.email}</div>
          { paymentInfo &&
            <PaymentStatus
              email={authCookie.email}
              product={paymentInfo.product}
              status={paymentInfo.status}
              expiryDate={paymentInfo.expiryDate}
            />
          }
        </div>
        {!paymentInfo && <ProductSelectionPage />}
      </div>
    </ErrorBoundary>
  );
};
export default Profile;
