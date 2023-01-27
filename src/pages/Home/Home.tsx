
import React ,{useState} from 'react';
import  {JobDet}  from '../../components/DataModels/JobDet';
import JobsData from './JobsData';
import JobFeed from './JobFeed';
import JobDetails from './JobDetails';
import './Home.scss';
import { ErrorBoundary,Searchbar, Location } from '../../components';
import data from '../../components/SearchBar/data';


const Home = () => {
  const [currentJob,setCurrentJob]= useState(null);
  const [view,setView]= useState('hide');
  const jobClick=(job:JobDet,currentView:string)=>{
    setView(currentView);
    setCurrentJob(job);
  };
  const jobs=JobsData;
  return (
    <ErrorBoundary>
      <div className="contentbox">
        <div className="top">
          <div className='inputForm'>
            <div className="searchBar">
              <Searchbar data={data} />
            </div>
            <div className='locationBar'>
              <Location />
            </div>
          </div>
        </div>
        <div className="down">
          <div className={view==='hide'?'show':window.screen.width>900?'show':'hide'}>
            { jobs.map((element:JobDet)=>(
              <JobFeed key={element.job.title} jobd={element} jobClick={jobClick} />
            )) }
          </div>
          <div className={view}>
            {currentJob && <JobDetails key={currentJob.job.title} jobd={currentJob} jobClick={jobClick} disablePreview={null} from="home"  />}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
