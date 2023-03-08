import React from 'react';
import { ErrorBoundary, Product, Payment } from '../../components';
import { useLocation, useHistory } from 'react-router-dom';
import  ProductData  from '../../components/DataModels/ProductData';
import Form from './Form';
interface Props{
  product:ProductData
}
const PostJobs = () => {
  const location= useLocation();
  const history =  useHistory();
  const product = location.state;
  if(!product){
    history.push('/profile');
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
