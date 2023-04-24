import React ,{useState} from 'react';
import JobFeed from './JobFeed';
import JobDetails from './JobDetails';
import './Home.scss';
import { ErrorBoundary,Searchbar, Location, Message, Loading } from '../../components';
import data from '../../components/SearchBar/data';
import { fetchJobs } from '../../services/Jobs';
import { Job } from '../../components/DataModels/Job';
import InfiniteScroll from 'react-infinite-scroll-component';


const Home = () => {
  const [currentJob,setCurrentJob]= useState(null);
  const [view,setView]= useState('hide');
  const [jobs,setJobs]=React.useState([]);
  const [selectedJob,setSelectedJob]=React.useState('');
  const [job,setJob] =React.useState([]);
  const [page,setPage]=React.useState(0);
  const [checkHasMore,setCheckHasMore]=React.useState(true);

  React.useEffect(()=>{
    fetchData(page);
  },[page]);
  const fetchData=async(page: any)=>{
    const res = await fetchJobs(page);
    if(res.data.length ===0){
      setCheckHasMore(false);
      return;
    }
    if(res){
      const newJobs=res.data;
      setJobs([...jobs,...newJobs]);
    }
  };
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

  const jobClick=(job:Job,currentView:string)=>{
    setView(currentView);
    setCurrentJob(job);
  };
  return (
    <ErrorBoundary>
      <div className="contentbox" >
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
            <InfiniteScroll
              dataLength={jobs.length}
              hasMore={checkHasMore}
              next={()=>setPage(jobs.length)}
              loader={<Loading />}
            >
              { job.map((element:Job)=>(
                <JobFeed key={element.job.title} jobd={element} jobClick={jobClick} />
              )) }
            </InfiniteScroll>
          </div>
          <div className={view}>
            {currentJob && <JobDetails key={currentJob.title} jobd={currentJob} jobClick={jobClick} disablePreview={null} isHome={true} />}
          </div>
        </div>
        {!checkHasMore && <h4 className='endingMessage'>We have these jobs only...</h4>}
      </div>
    </ErrorBoundary>
  );
};

export default Home;
