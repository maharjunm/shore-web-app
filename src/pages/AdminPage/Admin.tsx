import axios from 'axios';
import React from 'react';
import { REACT_BACKEND_ROUTE } from '../../config';
import './Admin.scss';


interface Job {
  _id:string;
  job:{
    title: string;
    experience: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    qualification: string;
  };
  company: {
    name: string;
    companyType: string;
    logo: string;
  };
  location: {
    city: string;
    country: string;
    state:string;
    region: string;
  };
  dates: {
    postingDate: Date;
    expiryDate: Date;
    closingDate: Date;
    removingDate: Date;
  };
  salary: {
    sal: number;
    hours: number;
    companyType: 'Annual' |'Regular'|'Monthly'|'Quarterly';
  };
  qualifications: {value:string , id:string}[];
  duties: {value:string , id:string}[];
  contact:{
    email:string;
    employeeEmail:string;
  };
  discipline:string[];
  status : 'Approved' | 'Rejected' | 'Pending' ;
}

function Admin() {
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [accept,setAccept]=React.useState('Accept');
  const [approvedJobs,setApprovedJobs]=React.useState([]);
  const [rejectedJobs,setRejectedJobs]=React.useState([]);

  const handleApprove= async (job: Job)=>{
    await axios.put(REACT_BACKEND_ROUTE+`v1/admin/${job._id}`,{status:'Approved'})
      .then(res=>{
        job.status= 'Approved';
        setApprovedJobs([...approvedJobs,job]);

      }).catch(e=> console.log(e));
      
  };

  const handleReject=async (job: Job)=>{
    await axios.put(REACT_BACKEND_ROUTE+`v1/admin/${job._id}`,{status:'Rejected'})
      .then(res=>{
        job.status='Rejected';
        setRejectedJobs([...rejectedJobs,job]);
      }).catch(e=> console.log(e));
  };

  React.useEffect(() => {
    const fetchjobs = async () => {
      try {
        const res = await axios.get<Job[]>(REACT_BACKEND_ROUTE + 'v1/admin');
        setJobs(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchjobs();
    
  }, []);
  console.log(jobs);
  return (
    <div>
      {jobs.length>0 && jobs.map((p:Job)=>(
        <div key="p.job._id">
          <div className="jobdetails">
            <div className="sticky">
              <div className="mainHead">
                <div className="sideContent">
                  <div className="logoBox">
                    <img className="companyLogoImage" src={p.company.logo} />
                  </div>
                  <div className="jobTitle">
                    <div className="title">
                      <div>{p.job.title}</div>
                    </div>
                    <h1>{p.company.name}</h1>
                    <span className='companyLocation'>{p.location.city},{p.location.state}-{p.location.country}</span>
                    <span>&#8377;{p.salary.sal} - {p.salary.companyType}</span>
                    <span>{p.job.experience}</span>
                  </div>
                </div>
              </div>
            </div>
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
            </div>
            <div className="footer">
              <h3 className="status">Status of Job:{p.status}</h3>
              { (p.status === 'Pending') || (p.status==='Rejected') &&
        <div className="btns">
       
          <button className="accept-btn" onClick={()=>handleApprove(p)}>{approvedJobs.includes(p._id) ? 'Approved' : 'Approve'}</button>
          <button className="reject-btn" onClick={()=>handleReject(p)}>Reject</button>
        </div>
              }
              {p.status ==='Approved' && <div className='containerSpecial'><button className="buttonSpecial" onClick={()=>handleReject(p)}>{rejectedJobs.includes(p._id) ? 'Rejected' : 'Reject'}</button></div>}
            </div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default Admin;
