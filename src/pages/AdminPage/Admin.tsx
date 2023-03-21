import axios from 'axios';
import React, { useContext,useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { REACT_BACKEND_URL } from '../../config';
import './Admin.scss';
import FormData from '../../components/DataModels/FormData';
import JobDetails from '../Home/JobDetails';
import { UserContext } from '../HomePage/HomePage';
import JobFeed from '../Home/JobFeed';

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
  createdBy:string;
}
function Admin() {

  const { state, dispatch } = useContext(UserContext);
  const [ authCookie, setAuthCookie ,removeAuthCookie ] = useCookies([]);
  const history = useHistory();
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [approvedJobs,setApprovedJobs]=React.useState([]);
  const [rejectedJobs,setRejectedJobs]=React.useState([]);
  const [currentJob,setCurrentJob]= useState(null);
  const [view,setView]= useState('hide');

  const handleApprove= async (job: Job)=>{
    await axios.put(`${REACT_BACKEND_URL}/v1/admin/${job._id}`,{status:'Approved'})
      .then(res=>{
        job.status= 'Approved';
        setApprovedJobs([...approvedJobs,job]);

      }).catch(e=> console.log(e));

  };

  const handleReject=async (job: Job)=>{
    await axios.put(`${REACT_BACKEND_URL}/v1/admin/${job._id}`,{status:'Rejected'})
      .then(res=>{
        job.status='Rejected';
        setRejectedJobs([...rejectedJobs,job]);
      }).catch(e=> console.log(e));
  };

  React.useEffect(() => {
    const fetchjobs = async () => {
      try {
        const res = await axios.get<Job[]>(`${REACT_BACKEND_URL}/v1/admin`);
        setJobs(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchjobs();

  }, []);
  if(!state.isAdmin){
    history.push('/login');
  }
  const jobClick=(job:FormData,currentView:string)=>{
    setView(currentView);
    setCurrentJob(job);
  };
  return (
    <div>
      <div>welcome {authCookie.email}</div>
      <div className="down">
        <div className={view==='hide'?'show':window.screen.width>900?'show':'hide'}>
          { jobs.map((element:FormData)=>(
            <JobFeed key={element._id} jobd={element} jobClick={jobClick} />
          )) }
        </div>
        <div className={view}>
          {currentJob &&
            <div className="onejob">
              <JobDetails key={currentJob._id} jobd={currentJob} jobClick={jobClick} disablePreview={null} isHome={true} />
              <h3 className="status">Status of Job:{currentJob.status}</h3>
              <div className="footer">
                { ((currentJob.status === 'Pending') || (currentJob.status==='Rejected')) &&
          <div className="btns">
            <button className="reject-btn" onClick={()=>handleReject(currentJob)}>Reject</button>
            <button className="accept-btn" onClick={()=>handleApprove(currentJob)}>{approvedJobs.includes(currentJob._id) ? 'Approved' : 'Approve'}</button>
          </div>
                }
                {currentJob.status ==='Approved' &&
              <div className='containerSpecial'>
                <button 
                  className="buttonSpecial" 
                  onClick={()=>handleReject(currentJob)}>
                  {rejectedJobs.includes(currentJob._id) ? 'Rejected' : 'Reject'}
                </button>
              </div>}
              </div>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default Admin;
