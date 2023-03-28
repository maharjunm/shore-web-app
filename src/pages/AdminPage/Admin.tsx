import React, { useContext,useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Admin.scss';
import FormData from '../../components/DataModels/FormData';
import  { Job }  from '../../components/DataModels/Job';
import JobDetails from '../Home/JobDetails';
import { UserContext } from '../HomePage/HomePage';
import JobFeed from '../Home/JobFeed';
import { setJobStatus, fetchJobsByAdmin } from '../../services/Jobs';


function Admin() {

  const { state, dispatch } = useContext(UserContext);
  const [ authCookie, setAuthCookie ,removeAuthCookie ] = useCookies([]);
  const history = useHistory();
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [approvedJobs,setApprovedJobs]=React.useState([]);
  const [rejectedJobs,setRejectedJobs]=React.useState([]);
  const [currentJob,setCurrentJob]= useState(null);
  const [view,setView]= useState('hide');

  const handleJobStatus = async (id:string,status:string) =>{
    const res = await setJobStatus({id,status});
    return res;
  };
  const handleApprove = (job: Job)=>{
    const res = handleJobStatus(job._id,'Approved');
    if(res){
      job.status = 'Approved';
      setApprovedJobs([...approvedJobs,job]);
    }
  };

  const handleReject = (job: Job)=>{
    const res = handleJobStatus(job._id,'Rejected');
    if(res){
      job.status = 'Rejected';
      setApprovedJobs([...approvedJobs,job]);
    }
  };

  React.useEffect(() => {
    const fetchjobs = async () => {
      const res = await fetchJobsByAdmin();
      if(res){
        setJobs(res.data);
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
      <div>welcome admin</div>
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
