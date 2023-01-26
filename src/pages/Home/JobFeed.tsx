import React from 'react';
import './JobFeed.scss';
import {ErrorBoundary} from '../../components';
import  {JobDet}  from '../../components/DataModels/JobDet';
interface Props {
    jobd:JobDet;
    jobClick:(currentJob:JobDet,currentView:string)=>void;
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
          <h4 >{p.job.title}</h4>
          <span className="company"> {p.company.name}</span>
          <span className="company"> {p.location.city},{p.location.state}</span>
        </div>
        <div className="shift">
          <span> &#8377; {p.salary.sal}-{p.salary.type}</span>
          <span>{p.job.experience}</span>
          <span> {p.company.type}</span>
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
              {p.job.title} in {p.location.city},{p.location.state}
            </b>
          </p>
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default JobFeed;
