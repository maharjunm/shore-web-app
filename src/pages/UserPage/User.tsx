import React from 'react';
import JobDetails from '../Home/JobDetails';
import JobFeed from '../Home/JobFeed';
import { getJobByUser } from '../../services/Jobs';
import { Job } from '../../components/DataModels/Job';

const User=()=>{
  const [jobs,setJobs]=React.useState([]);
  const [currentJob,setCurrentJob]= React.useState(null);
  const [view,setView]= React.useState('hide');
  const jobClick=(job:Job,currentView:string)=>{
    setView(currentView);
    setCurrentJob(job);
  };
  React.useEffect(()=>{
    const fetchData=async()=>{
      const res = await getJobByUser();
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
          History of Jobs you posted
        </div>
        <div className="down">
          <div className={view==='hide'?'show':window.screen.width>900?'show':'hide'}>
            { jobs.map((element:Job)=>(
              <JobFeed key={element._id} jobd={element} jobClick={jobClick} />
            )) }
          </div>
          <div className={view}>
            {currentJob && <JobDetails key={currentJob._id} jobd={currentJob} jobClick={jobClick} disablePreview={null} isHome={true}  />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;