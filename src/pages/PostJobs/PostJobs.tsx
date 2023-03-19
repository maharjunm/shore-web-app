import React ,{ useContext } from 'react';
import { ErrorBoundary, Product, Payment } from '../../components';
import { useLocation, useHistory } from 'react-router-dom';
import { UserContext } from '../HomePage/HomePage';
import  ProductData  from '../../components/DataModels/ProductData';
import { useSelector } from 'react-redux';
import { selectPaymentStatus } from '../../store/Payments/selector';
import {RootState} from '../../store/configureStore';
import Form from './Form';
interface Props{
  product:ProductData
}
const PostJobs = () => {
  const { state, dispatch } = useContext(UserContext);
  const  paymentStatus  = useSelector((state:RootState) => {
    return selectPaymentStatus(state);
  });
  const location= useLocation();
  const history =  useHistory();
  const product = location.state;
  if(!state.user){
    history.push('/login');
    return ;
  }
  if(paymentStatus){
    history.push('/postajob');
    return ;
  }
  if(!product){
    history.push('/profile');
    return ;
  }
  return (
    <ErrorBoundary>
      <div className="job_page">
        <div className="content">
          <Product product={ product } isSelected={true} />
          <Payment product={ product }/>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default PostJobs;
