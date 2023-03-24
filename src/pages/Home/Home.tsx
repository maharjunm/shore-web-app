import React ,{useState} from 'react';
import JobFeed from './JobFeed';
import JobDetails from './JobDetails';
import './Home.scss';
import { ErrorBoundary,Searchbar, Location } from '../../components';
import  FormData  from '../../components/DataModels/FormData';
import data from '../../components/SearchBar/data';
import {  REACT_BACKEND_URL } from '../../config';
import { fetchJobs } from '../../services/Jobs';


const Home = () => {
  const [currentJob,setCurrentJob]= useState(null);
  const [view,setView]= useState('hide');
  const [jobs,setJobs]=React.useState([]);
  const [selectedJob,setSelectedJob]=React.useState('');
  const [job,setJob] =React.useState([]);
  React.useEffect(()=>{
    const fetchData=async()=>{
      const res = await fetchJobs();
      if(res){
        setJobs(res.data);
      }
    };
    fetchData();

  },[]);
  React.useEffect(()=>{
    let filteredJobs=jobs;
    if(selectedJob){
      filteredJobs=jobs.filter(item => item.job.title.toLowerCase().includes(selectedJob.toLowerCase()));
    }
    setJob(filteredJobs);
  },[selectedJob,jobs]);
  const handleJobSelect=(jobName:string)=>{
    setSelectedJob(jobName);
  };

  const jobClick=(job:FormData,currentView:string)=>{
    setView(currentView);
    setCurrentJob(job);
  };
  return (
    <ErrorBoundary>
      <div className="contentbox">
        <div className="top">
          <div className='inputForm'>
            <div className="searchBar">
              <Searchbar data={data} onJobSelect={handleJobSelect}/>
            </div>
            <div className='locationBar'>
              <Location />
            </div>
          </div>
        </div>
        <div className="down">
          <div className={view==='hide'?'show':window.screen.width>900?'show':'hide'}>
            { job.map((element:FormData)=>(
              <JobFeed key={element._id} jobd={element} jobClick={jobClick} />
            )) }
          </div>
          <div className={view}>
            {currentJob && <JobDetails key={currentJob._id} jobd={currentJob} jobClick={jobClick} disablePreview={null} isHome={true} />}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
