import * as React from 'react';
import { Link } from 'react-router-dom';
import './JobDetails.scss';
import { ErrorBoundary } from '../../components';
import  FormData  from '../../components/DataModels/FormData';
import  JobsData  from './JobsData';
interface Props {
    key:string,
    jobd:FormData | null;
    jobClick:(currentJob:FormData,currentView:string)=>void;
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
          <div className="mainHead">
            <div className="sideContent">
              <div className="logoBox">
                <img
                  className="companyLogoImage"
                  src={det.from==='home'?p.companyLogo.toString():URL.createObjectURL(p.companyLogo[0])}
                />
              </div>
              <div className="jobTitle">
                <div className="title">
                  <div>{p.title}</div>
                </div>
                <Link to='/' >{p.companyName}</Link>
                <span className='companyLocation'>{p.city},{p.state}-{p.country}</span>
                <span>&#8377;{p.salary} - {p.jobType}</span>
                <span>{p.experience}</span>
              </div>
            </div>
            <div className="wrong" onClick={clicked}>x</div>
          </div>
        </div>
        <div className="scrollableContent">
          <div className="headDetails">
            <b className='title'>Job Details</b>
            <div className="flexside">
              <div className="boxside">
                <div className="salaryDescription">
                  <b>Salary</b>
                  <span>&#x20B9;{p.salary}-{p.jobType}</span>
                </div>
                <div className="jobType">
                  <b>Job Type</b>
                  <span>{p.companyType}</span>
                </div>
              </div>
              <div className="boxside">
                <div className="jobType">
                  <b>Duration</b>
                  <span>{p.hours}hrs/Day</span>
                </div>
                <div className="jobType">
                  <b>Location</b>
                  <span>{p.city},{p.state},{p.country}-{p.region}</span>
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
                  <span>{p.postingDate.toString()}</span>
                </div>
                <div className="jobType">
                  <b>Job Expires on </b>
                  <span>{p.expiryDate.toString()}</span>
                </div>
              </div>
              <div className="boxside">
                <div className="jobType">
                  <b>Closing Job on</b>
                  <span>{p.appClosingDate.toString()}</span>
                </div>
                <div className="jobType">
                  <b>Removing Job on</b>
                  <span>{p.removingJobDate.toString()}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Box alignLeft">
            <b className="jobTitle">
              <h1>Qualifications</h1>
            </b>
            <ul>
              <li>{p.qualification}(Mandatory)</li>
              {
                p.qualifications.map((qualification:{id:string,value:string})=>(
                  <li key={qualification.id}>{qualification.value}</li>
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
                  p.duties.map((duty:{id:string,value:string})=>(
                    <li key={duty.id}>{duty.value}</li>
                  ))
                }
              </ul>
            </div>
            <div className="innerbox">
              <h1 className="jobTitle b">Experience</h1>
              <ul>
                <li>{p.experience}</li>
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
