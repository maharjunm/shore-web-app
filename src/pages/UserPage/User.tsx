import React from 'react';
import JobDetails from '../Home/JobDetails';
import JobFeed from '../Home/JobFeed';
import FormData from '../../components/DataModels/FormData';
import axios from 'axios';
import { REACT_BACKEND_URL } from '../../config';
import { useCookies } from 'react-cookie';
import { fetchJobs } from '../../services/Jobs'; 
import { getJobByUser } from '../../services/Jobs';

const User=()=>{
  const [jobs,setJobs]=React.useState([]);
  const [currentJob,setCurrentJob]= React.useState(null);
  const [view,setView]= React.useState('hide');
  const [ authCookie, setAuthCookie, removeAuthCookie] = useCookies([]);
  const jobClick=(job:FormData,currentView:string)=>{
    setView(currentView);
    setCurrentJob(job);
  };
  React.useEffect(()=>{
    const fetchData=async()=>{
      const userMailId=authCookie.email;
      const res = await getJobByUser({userMailId});
      if(res){
        setJobs(res.data);
      }
    };
    fetchData();

  },[]);
  
  return(
    <div>
      <div className="contentbox">
        <div className="top">
        </div>
        <div className="down">
          <div className={view==='hide'?'show':window.screen.width>900?'show':'hide'}>
            { jobs.map((element:FormData)=>(
              <JobFeed key={element._id} jobd={element} jobClick={jobClick} />
            )) }
          </div>
          <div className={view}>
            {currentJob && <JobDetails key={currentJob._id} jobd={currentJob} jobClick={jobClick} disablePreview={null} isHome={true} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;