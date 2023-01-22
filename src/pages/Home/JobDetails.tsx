import * as React from 'react';
import { Link } from 'react-router-dom';
import './JobDetails.scss';
import  {JobDet}  from '../../components/DataModels/JobDet';
import {ErrorBoundary} from '../../components';
import  JobsData  from './JobsData';
interface Props {
    jobd:JobDet;
    jobClick:(currentJob:JobDet,currentView:string)=>void;
}
const JobDetails= (det:Props) => {
  let p=det.jobd;
  const clicked=()=>{
    det.jobClick(null,"hide");
  }
  console.log(p.dates.postingDate);
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
            <span className='companyLocation'>{p.location.city},{p.location.state}-{p.location.country}</span>
            <span>&#8377;{p.salary.sal} - {p.salary.type}</span>
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
                  <span>&#x20B9;{p.salary.sal}-{p.salary.type}</span>
                </div>
                <div className="jobType">
                  <b>Job Type</b>
                  <span>{p.company.type}</span>
                </div>
              </div>
              <div className="boxside">
                <div className="jobType">
                  <b>Duration</b>
                  <span>{p.salary.hours}hrs/Day</span>
                </div>
                <div className="jobType">
                  <b>Location</b>
                  <span>{p.location.city},{p.location.state},{p.location.country}-{p.location.region}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Box alignLeft">
            <b className="jobTitle">
              <h1>Important Dates</h1>
            </b>
            <ul className="ul">
              <li><span>Posting Job on</span> <b>{p.dates.postingDate.toLocaleDateString()} </b></li>
              <li><span>Job Expires on </span><b>{p.dates.expiryDate.toLocaleDateString()} </b></li>
              <li><span>Closing Job on </span><b>{p.dates.closingDate.toLocaleDateString()} </b></li>
              <li><span>Removing Job on </span><b>{p.dates.removingJobDate.toLocaleDateString()} </b></li>
            </ul>
          </div>
          <div className="Box alignLeft">
            <b className="jobTitle">
              <h1>Qualifications</h1>
            </b>
            <ul>
              <li>{p.job.qualification}(Preferred)</li>
              <li>{p.job.experience}</li>
              <li>Node.js in a team production environment: 2 years (Required)</li>
            </ul>
          </div>
          <div className="Box alignLeft">
            <b className="jobTitle">
              <h1>Full Job Description</h1>
            </b>
            <div className="innerbox">
              <h1 className="jobTitle b">Roles & Responsibilities</h1>
              <ul className="colorlightblack">
                <li>Developing and maintaining all server-side network components.</li>
                <li>Developing and maintaining all client-side UI components and interfaces.</li>
                <li>Designing customer-facing UI and back-end services for various business processes</li>
                <li>Developing high-performance applications by writing testable, reusable, and efficient code.</li>
                <li>Implementing effective security protocols, data protection measures, and storage solutions.</li>
                <li>Running diagnostic tests, repairing defects, and providing technical support.</li>
                <li>Recommending and implementing improvements to processes and technologies.</li>
                <li>Keeping informed of advancements in the fields of Node.js and React.js development.Keeping informed of advancements in the fields of Node.js and React.js development.</li>
                <li>Designing DB tables and Querying Databases to validate application behaviour and perform unit tests</li>
              </ul>
            </div>
            <div className="innerbox">
              <h1 className="jobTitle b">Mandatory Skills</h1>
              <ul>
                <li>At least three years' experience as a full-stack (React/Node.js/MySQL) developer.</li>
                <li>Extensive knowledge of JavaScript, web stacks, libraries, and frameworks.</li>
                <li>Knowledge of front-end technologies such as HTML5 and CSS3.</li>
              </ul>
            </div>
            <div className="innerbox">
              <h1 className="jobTitle b">Experience</h1>
              <ul>
                <li>{p.job.experience}</li>
                <li>React in a team production environment: 2 years</li>
                <li>Node.js in a team production environment: 2 years (Required)</li>
              </ul>
            </div>
          </div>
          <div className="Box alignLeft">
            <b className="jobTitle">
              <h1>Hiring Insights</h1>
            </b>
            <ul>
              <li>Hiring x candidates for this role</li>
              <li>Urgently hiring</li>
            </ul>
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
