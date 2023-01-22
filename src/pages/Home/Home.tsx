import React ,{useState} from 'react';
import { ErrorBoundary ,JobDetailsType } from '../../components';
import  {JobDet}  from '../../components/DataModels/JobDet';
import JobsData from './JobsData';
import JobFeed from './JobFeed';
import JobDetails from './JobDetails';
import './Home.scss';
const Home = () => {
    const [currentJob,setCurrentJob]= useState(null);
    const [view,setView]= useState("hide");
    const jobClick=(job:JobDet,currentView:string)=>{
      setView(currentView);
      setCurrentJob(job);
    }
    const jobs=JobsData;
    return (
        <ErrorBoundary>
          <div className="contentbox">
            <div className="top">
              <h1>seachbar and location bar goes here</h1>
            </div>
            <div className="down">
              <div className={view==="hide"?"show":window.screen.width>900?"show":"hide"}>
                {
                  jobs.map((element:JobDet)=>(
                    <JobFeed jobd={element} jobClick={jobClick} />
                  ))
                }
              </div>
              <div className={view}>
                {currentJob && <JobDetails jobd={currentJob} jobClick={jobClick}  />}
              </div>
            </div>
          </div>
        </ErrorBoundary>
    );
};

export default Home;
