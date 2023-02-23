import React from 'react';
import { ErrorBoundary } from '../../components';
import { useLocation } from 'react-router-dom';
import Form from './Form';
interface Props{
  product:{
    type:string,
    amount:number,
    hostingTime:number,
    offers:{field:string,value:boolean}[]
  }
}
const PostJobs = () => {
  let location= useLocation();
  console.log(location.state);
  return (
    <ErrorBoundary>
      <p>hi</p>
    </ErrorBoundary>
  );
};

export default PostJobs;
