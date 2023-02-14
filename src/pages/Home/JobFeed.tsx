import React from 'react';
import './JobFeed.scss';
import {ErrorBoundary} from '../../components';
import  {JobDet}  from '../../components/DataModels/JobDet';
import axios from 'axios';
interface Props {
    key:string;
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
          <span className="company"> {p.location.city},{p.location.region}</span>
        </div>
        <div className="shift">
          <span> &#8377; {p.salary.sal}-{p.job.type}</span>
          <span>{p.job.experience}</span>
          <span> {p.company.companyType}</span>
        </div>
        <div className="downshift">
          <span>Easily apply</span>
          <span>{p.job.description}</span>
        </div>
        <ul>
          {p.job.duties.map((items,index)=>
            (<li key={index}>{items}</li>))
          }
        </ul>
        <div className="foot">
          <p>
              Hiring ongoing: From{' '}
            <b>
              {p.job.title} in {p.location.city},{p.location.region}
            </b>
          </p>
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default JobFeed;
