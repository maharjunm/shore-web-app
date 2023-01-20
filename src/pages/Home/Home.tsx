import React ,{useState} from 'react';
import { ErrorBoundary ,JobDetailsType } from '../../components';
import JobFeed from './JobFeed';
import JobDetails from './JobDetails';
import './Home.scss';
const Home = () => {
    let jobs= [
      new JobDetailsType("Software Developer-Fresher","INFOSYS","Hyderabad, Telangana","15,000/month","Fresher +1"),
      new JobDetailsType("Frontend Developer-Fresher","THOUGHTWORKS","Pune, Mumbai","20,000/month","Fresher +2"),
      new JobDetailsType("Backend Developer-Fresher","DELOITTE","Delhi","50,000/month","Fresher +3"),
    ]
    const [currentJob,setCurrentJob]= useState(null);
    const [view,setView]= useState("hide");
    const jobClick=(job:JobDetailsType,currentView:string)=>{
      setView(currentView);
      setCurrentJob(job);
    }
    return (
        <ErrorBoundary>
          <div className="content">
            <div className="top">
              <h1>seachbar and location bar goes here</h1>
            </div>
            <div className="down">
              <div className={view==="hide"?"show":window.screen.width>900?"show":"hide"}>
                {
                  jobs.map((element:JobDetailsType)=>(
                    <JobFeed jobd={element} jobClick={jobClick}/>
                  ))
                }
              </div>
              <div className={view}>
                {currentJob && <JobDetails jobd={currentJob} jobClick={jobClick} />}
              </div>
            </div>
          </div>
        </ErrorBoundary>
    );
};

export default Home;
