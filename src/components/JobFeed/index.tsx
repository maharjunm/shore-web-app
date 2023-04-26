import React from 'react';
import { Job } from '../DataModels/Job';
import { FontAwesomeIcon  as FA} from '@fortawesome/react-fontawesome';
import { faXmark , faCheck, faWarning } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

interface Props {
  key:string;
  jobd:Job;
  jobClick:(currentJob:Job,currentView:string)=>void;
}

export const JobFeed = (props:Props) => {
  const { jobd, jobClick } = props; 
  const viewJob = () => {
    jobClick(jobd,'show');
  };
  const icon = jobd.status==='Rejected'?faXmark:jobd.status==='Approved'?faCheck:faWarning;
  const statusColor = jobd.status==='Rejected'?'red':jobd.status==='Approved'?'green':'orange';
  return (
    <div className="historyOfJobs" onClick={viewJob}>
      <div className='part'>
        <b>{jobd.job.title}</b>
        <p>{jobd.company.name+'-'+jobd.company.companyType+','+jobd.location.state+'-'+jobd.location.country}</p>
      </div>
      <div className='part'>
        product type
      </div>
      <div className={'part icons '+statusColor}>
        <span>{jobd.status}</span>
        <span className='iconStatus'> <FA  icon={icon} /></span>
      </div>
    </div>
  );
};