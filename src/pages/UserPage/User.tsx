import React from 'react';
import JobDetails from '../Home/JobDetails';
import JobFeed from '../Home/JobFeed';
import FormData from '../../components/DataModels/FormData';
import axios from 'axios';
import { REACT_BACKEND_URL } from '../../config';
import { useCookies } from 'react-cookie';
import { fetchJobs } from '../../services/Jobs'; 
import { getJobByUser } from '../../services/Jobs';
import InfiniteScroll from 'react-infinite-scroll-component';

const User=()=>{
  const [jobs,setJobs]=React.useState([]);
  const [currentJob,setCurrentJob]= React.useState(null);
  const [view,setView]= React.useState('hide');
  const [ authCookie, setAuthCookie, removeAuthCookie] = useCookies([]);
  const [page,setPage]=React.useState(0);
  const [hasMoreJobs,setHasMoreJobs]=React.useState(true);
  const jobClick=(job:FormData,currentView:string)=>{
    setView(currentView);
    setCurrentJob(job);
  };
  React.useEffect(()=>{
    const fetchData=async()=>{
      const res = await getJobByUser();
      if(res.data.length==0){
        setHasMoreJobs(false);
        return;
      }
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
            <InfiniteScroll
              hasMore={hasMoreJobs}
              next={()=>setPage(jobs.length)}
              dataLength={jobs.length}
              loader={<h4>Loading......</h4>}
            >
              { jobs.map((element:FormData)=>(
                <JobFeed key={element._id} jobd={element} jobClick={jobClick} />
              )) }
            </InfiniteScroll>
          </div>
          <div className={view}>
            {currentJob && <JobDetails key={currentJob._id} jobd={currentJob} jobClick={jobClick} disablePreview={null} isHome={true} />}
          </div>
        </div>
      </div>
      {!hasMoreJobs && <h4>No more jobs....</h4>}
    </div>
  );
};
export default User;