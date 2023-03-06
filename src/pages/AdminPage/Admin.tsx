import axios from 'axios';
import React from 'react';
import { REACT_BACKEND_ROUTE } from '../../config';
import './Admin.css';


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
    <div className="jobs-container">
      {jobs.length > 0 &&
    jobs.map((job: Job) => (
      <div className="job-card" key={job.job.title}>
        
        <div className='header'><h1 className="job-title">{job.job.title} </h1><img src={job.company.logo} className="logo"></img></div>
        
        
        <div className="job-info">
          <div className="job-info-item">
            <span className="job-info-label">Experience:</span>
            {job.job.experience}
          </div>
          <div className="job-info-item">
            <span className="job-info-label">Type:</span>
            {job.job.type}
          </div>
          <div className="job-info-item">
            <span className="job-info-label">Qualification:</span>
            {job.job.qualification}
          </div>
          <div className="job-info-item">
            <span className="job-info-label">Company:</span>
            {job.company.name}
          </div>
          <div className="job-info-item">
            <span className="job-info-label">Location:</span>
            {job.location.city}, {job.location.state}, {job.location.country}
          </div>
          <div className="job-info-item">
            <span className="job-info-label">Posting date:</span>
            {new Date(job.dates.postingDate).toLocaleDateString()}
          </div>
          <div className="job-info-item">
            <span className="job-info-label">Expiry date:</span>
            {new Date(job.dates.expiryDate).toLocaleDateString()}
          </div>
          <div className="job-info-item">
            <span className="job-info-label">Closing date:</span>
            {new Date(job.dates.closingDate).toLocaleDateString()}
          </div>
          <div className="job-info-item">
            <span className="job-info-label">Salary:</span>
            {job.salary.sal} {job.salary.companyType}
          </div>
          <div className="job-info-item">
            <span className="job-info-label">Qualifications:</span>
            {job.qualifications.map((q) => q.value).join(', ')}
          </div>
          <div className="job-info-item">
            <span className="job-info-label">Duties:</span>
            {job.duties.map((d) => d.value).join(', ')}
          </div>
          <div className="job-info-item">
            <span className="job-info-label">Discipline:</span>
            {job.discipline.join(', ')}
          </div>
        </div>
        <div className="footer">
          <h3 className="status">Status of Job:{job.status}</h3>
          { (job.status === 'Pending') || (job.status==='Rejected') &&
        <div className="btns">
       
          <button className="accept-btn" onClick={()=>handleApprove(job)}>{approvedJobs.includes(job._id) ? 'Approved' : 'Approve'}</button>
          <button className="reject-btn" onClick={()=>handleReject(job)}>Reject</button>
        </div>
          }
          {job.status ==='Approved' && <div className='containerSpecial'><button className="buttonSpecial" onClick={()=>handleReject(job)}>{rejectedJobs.includes(job._id) ? 'Rejected' : 'Reject'}</button></div>}
        </div>
      </div>
      
    ))}
    </div>

  );
}

export default Admin;
