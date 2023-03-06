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
          <h4 >{p.job.title}</h4>
          <span className="company"> {p.company.name}</span>
          <span className="company"> {p.location.city},{p.location.state}</span>
        </div>
        <div className="shift">
          <span>&#8377; {p.salary.sal}-{p.job.type}</span>
          <span>{p.job.experience}</span>
          <span> {p.company.companyType}</span>
        </div>
        <ul>
          {p.qualifications.map((qualification:{value:string,id:string})=>
            <li key={qualification.id}>{qualification.value}</li>
          )}
        </ul>
        <h2>Discipline:</h2>
        <ul>
          {p.discipline.map((discipline: string, index: number) => (
            <li key={index}>{discipline}</li>
          ))}
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
