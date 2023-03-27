import React , { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { UserContext } from '../HomePage/HomePage';
import  ProductSelectionPage  from '../ProductSelectionPage/ProductSelectionPage';
import { ErrorBoundary, Message } from '../../components';
import  PaymentStatus from './Payments/PaymentStatus';
import { getPaymentStatus } from '../../services/Payments';
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
  const  paymentStatus  = useSelector((state:RootState) => {
    return selectPaymentStatus(state);
  });
  const [ loginMessage, setLoginMessage ] = useState('You have successfully Logged in..');
  const [ paymentInfo, setPaymentInfo ] = useState(null);
  React.useEffect(()=>{
    const fetchPaymentInfo = async ( ) => {
      const userMailId = authCookie.email;
      const res = await getPaymentStatus({userMailId});
      if(res.data.message === 'success'){
        setPaymentInfo(res.data);
        dispatch(updatePaymentStatus(res.data.status));
      }
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
          { paymentInfo &&
            <PaymentStatus
              email={authCookie.email}
              product={paymentInfo.product}
              status={paymentInfo.status}
              expiryDate={paymentInfo.expiryDate}
            />
          }
        </div>
        {(!paymentInfo || !paymentInfo.status) && <ProductSelectionPage />}
      </div>
    </ErrorBoundary>
  );
};
export default Profile;
