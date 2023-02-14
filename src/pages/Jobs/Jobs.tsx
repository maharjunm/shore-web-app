import React, { ButtonHTMLAttributes } from 'react';
import { ErrorBoundary } from '../../components';
import axios  from 'axios';
import jobListings from './data';

const Jobs = () => {
  async function Test(event:React.FormEvent<HTMLFormElement>){
    for(let object of jobListings){
      try{
        const response=await axios.post("http://localhost:3000/v1/job",object);
        console.log(response.data);
      }
      catch(error){
        console.log(error);
      }
    }
}
  return (
    <ErrorBoundary>
      <h1>jobs</h1>

      <form onSubmit={Test}>
        <button type="submit">Submit</button>
      </form>
    </ErrorBoundary>
  );
};

export default Jobs;
