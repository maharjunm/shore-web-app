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
    isHome:boolean;
}
const JobDetails= (details:Props) => {
  let p=details.jobd;
 const imagePath = p.company.logo;
  const clicked=()=>{
    if(details.isHome){
      details.jobClick(null,'hide');
    }else{
      details.disablePreview();
    }
  };
  return (
    <ErrorBoundary>
      <div className="jobdetails">
        <div className="sticky">
          <div className="mainHead">
            <div className="sideContent">
              <div className="logoBox">
                <img className="companyLogoImage" src={imagePath} />
              </div>
              <div className="jobTitle">
                <div className="title">
                  <div>{p.job.title}</div>
                </div>
                <Link to='/' >{p.company.name}</Link>
                <span className='companyLocation'>{p.location.city},{p.location.state}-{p.location.country}</span>
                <span>&#8377;{p.salary.sal} - {p.salary.companyType}</span>
                <span>{p.job.experience}</span>
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
                  <span>&#x20B9;{p.salary.sal}-{p.salary.companyType}</span>
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
                  <span>{p.location.city},{p.location.state},{p.location.country}-{p.location.region}</span>
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
                  <span>{p.dates.removingDate.toString()}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Box alignLeft">
            <b className="jobTitle">
              <h1>Qualifications</h1>
            </b>
            <ul>
              
              {
                p.qualifications.map((qualification:{value:string,id:string})=>(
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

              <ul className="colorlightblack">
                {
                  p.duties.map((duty:{value:string ,id:string})=>(
                    <li key={duty.id}>{duty.value}</li>
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
