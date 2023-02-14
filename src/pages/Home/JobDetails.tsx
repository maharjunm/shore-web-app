import * as React from 'react';
import { Link } from 'react-router-dom';
import './JobDetails.scss';
import  {JobDet}  from '../../components/DataModels/JobDet';
import {ErrorBoundary} from '../../components';

interface Props {
    key:string,
    jobd:JobDet;
    jobClick:(currentJob:JobDet,currentView:string)=>void;
    disablePreview:()=>void;
    from:string;
}
const JobDetails= (det:Props) => {
  let p=det.jobd;
  const clicked=()=>{
    if(det.from==='home'){
      det.jobClick(null,'hide');
    }
    if(det.from==='postajob'){
      det.disablePreview();
    }
  };
  
  return (
    <ErrorBoundary>
      <div className="jobdetails">
        <div className="sticky">
          <div className="jobTitle">
            <div className="title">
              <div>{p.job.title}</div>
              <div className="wrong" onClick={clicked}>x</div>
            </div>
            <Link to='/' >{p.company.name}</Link>
            <span className='companyLocation'>{p.location.city},{p.location.region}-{p.location.country}</span>
            <span>&#8377;{p.salary.sal} - {p.salary.salaryType}</span>
            <span>{p.job.experience}</span>
          </div>
        </div>
        <div className="scrollableContent">
          <div className="headDetails">
            <b className='title'>Job Details</b>
            <div className="flexside">
              <div className="boxside">
                <div className="salaryDescription">
                  <b>Salary</b>
                  <span>&#x20B9;{p.salary.sal}-{p.salary.salaryType}</span>
                </div>
                <div className="jobType">
                  <b>Job Type</b>
                  <span>{p.company.companyType}</span>
                </div>
              </div>
              <div className="boxside">
                <div className="jobType">
                  <b>Duration</b>
                  <span>{p.salary.hours}hrs/Day</span>
                </div>
                <div className="jobType">
                  <b>Location</b>
                  <span>{p.location.city},{p.location.region},{p.location.country}-{p.location.region}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="headDetails bordertop">
            <b className='title'>Important Dates</b>
            <div className="flexside">
              <div className="boxside">
                <div className="salaryDescription">
                  <b>Posting Job on</b>
                  <span>{p.dates.postingDate.toString()}</span>
                </div>
                <div className="jobType">
                  <b>Job Expires on </b>
                  <span>{p.dates.expiryDate.toString()}</span>
                </div>
              </div>
              <div className="boxside">
                <div className="jobType">
                  <b>Closing Job on</b>
                  <span>{p.dates.closingDate.toString()}</span>
                </div>
                <div className="jobType">
                  <b>Removing Job on</b>
                  <span>{p.dates.removingJobDate.toString()}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Box alignLeft">
            <b className="jobTitle">
              <h1>Qualifications</h1>
            </b>
            <ul>
              <li>{p.job.qualifications}(Mandatory)</li>
              {
                p.job.qualifications.map((qualification,index)=>(
                  <li key={index}>{qualification}</li>
                ))
              }
            </ul>
          </div>
          <div className="Box alignLeft">
            <b className="jobTitle">
              <h1>Full Job Description</h1>
            </b>
            <div className="innerbox">
              <h1 className="jobTitle b">Job Duties</h1>
              <ul className="colorlightblack">
                {
                  p.job.duties.map((duty,index)=>(
                    <li key={index}>{duty}</li>
                  ))
                }
              </ul>
            </div>
            <div className="innerbox">
              <h1 className="jobTitle b">Experience</h1>
              <ul>
                <li>{p.job.experience}</li>
              </ul>
            </div>
          </div>
          <div className="Box alignLeft report">
            <button className="btn">Report this job</button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default JobDetails;
