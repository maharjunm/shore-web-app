import React, { useContext,useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Admin.scss';
import  { Job }  from '../../components/DataModels/Job';
import JobDetails from '../Home/JobDetails';
import { UserContext } from '../HomePage/HomePage';
import JobFeed from '../Home/JobFeed';
import { setJobStatus, fetchJobsByAdmin } from '../../services/Jobs';

function Admin() {

  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [approvedJobs,setApprovedJobs]=React.useState([]);
  const [rejectedJobs,setRejectedJobs]=React.useState([]);
  const [ pendingJobs, setPendingJobs] =React.useState([]);
  const [ tab, setTab] = useState('Pending');
  const [currentJob,setCurrentJob]= useState(null);
  const [view,setView]= useState('hide');

  const handleJobStatus = async (id:string,status:string) =>{
    const res = await setJobStatus({id,status});
    setPendingJobs(( updatedJobs ) => {
      const newJobs = jobs.filter((job)=>job._id!=id);
      return newJobs;
    });
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
      setRejectedJobs([...rejectedJobs,job]);
    }
  };

  React.useEffect(() => {
    const fetchjobs = async () => {
      const res = await fetchJobsByAdmin();
      if(res){
        setJobs(res.data);
        setPendingJobs(res.data);
      }
    };
    fetchjobs();

  }, []);
  if(!state.isAdmin){
    history.push('/login');
  }
  const jobClick=(job:Job,currentView:string)=>{
    setView(currentView);
    setCurrentJob(job);
  };
  const handleTabs = (jobs: Job[], tab: string) =>{
    setJobs(jobs);
    setTab(tab);
    console.log(rejectedJobs);
  };
  return (
    <div className="adminDashboard">
      <div className="tabs">
        <span className={tab==='Pending' && 'active'} onClick={()=> handleTabs(pendingJobs,'Pending')} >pending</span>
        <span className={tab==='Rejected' && 'active'} onClick={()=> handleTabs(rejectedJobs, 'Rejected')} >rejected</span>
      </div>
      <div className="down">
        <div className={view==='hide'?'show':window.screen.width>900?'show':'hide'}>
          { jobs.map((element:Job)=>(
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
