import React from 'react';
import './JobFeed.scss';
import {JobDetailsType,ErrorBoundary} from './../../components';
interface Props {
    jobd:JobDetailsType;
    jobClick:(currentJob:JobDetailsType)=>void;
}
const JobFeed = (det: Props) => {
    let p=det.jobd;
    const setJob=()=>{
      det.jobClick(p);
    }
    return (
      <ErrorBoundary>
        <div className="jobFeed" onClick={setJob} >
          <div className="title">
            <h4 >{p.role}</h4>
            <span className="company"> {p.companyName}</span>
            <span className="company"> {p.place}</span>
          </div>
          <div className="shift">
            <span> &#8377; {p.salary}</span>
            <span>{p.experience}</span>
            <span> Regular</span>
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
                {p.role} in {p.place}
              </b>
            </p>
          </div>
        </div>
      </ErrorBoundary>
    );
};
export default JobFeed;
