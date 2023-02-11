import React from 'react';
import './JobFeed.scss';
import { ErrorBoundary } from '../../components';
import  FormData  from '../../components/DataModels/FormData';
interface Props {
    key:string;
    jobd:FormData;
    jobClick:(currentJob:FormData,currentView:string)=>void;
}
const JobFeed = (det: Props) => {
  let p=det.jobd;
  const setJob=()=>{
    det.jobClick(p,'show');
  };
  return (
    <ErrorBoundary>
      <div className="jobFeed" onClick={setJob} >
        <div className="title">
          <h4 >{p.title}</h4>
          <span className="company"> {p.companyName}</span>
          <span className="company"> {p.city},{p.state}</span>
        </div>
        <div className="shift">
          <span> &#8377; {p.salary}-{p.jobType}</span>
          <span>{p.experience}</span>
          <span> {p.companyType}</span>
        </div>
        <div className="downshift">
          <span>Easily apply</span>
          <span>Hiring multiple candidate</span>
        </div>
        <ul>
          <li>Software design and development in a test-driven environment. </li>
          <li>Knowledge of coding languages (e.g. PHP, Java, JavaScript). </li>
        </ul>
        <div className="foot">
          <p>
              Hiring ongoing: From{' '}
            <b>
              {p.title} in {p.city},{p.state}
            </b>
          </p>
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default JobFeed;
