import React ,{ useContext } from 'react';
import { ErrorBoundary, Product, Payment } from '../../components';
import { useLocation, useHistory } from 'react-router-dom';
import { UserContext } from '../HomePage/HomePage';
import  ProductData  from '../../components/DataModels/ProductData';
import ProductSelectionPage from '../ProductSelectionPage/ProductSelectionPage';
interface Props{
  product:ProductData
}
const PostJobs = () => {
  const { state, dispatch } = useContext(UserContext);
  const history =  useHistory();
  if(state && state.isAdmin){
    history.push('/postajob');
    return ;
  }
  if(!state.user){
    history.push('/login');
    return ;
  }
  return (
    <ErrorBoundary>
      <ProductSelectionPage />
    </ErrorBoundary>
  );
};

export default PostJobs;
