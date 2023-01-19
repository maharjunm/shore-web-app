import React ,{useState} from 'react';
import { ErrorBoundary ,JobDetailsType ,Flex} from '../../components';
import JobFeed from './JobFeed';
import JobDetails from './JobDetails';
import './Home.scss';
const Home = () => {
    let jobs= [
      new JobDetailsType("Software Developer-Fresher","INFOSYS","Hyderabad, Telangana","15,000 a month","Fresher +1"),
      new JobDetailsType("Frontend Developer-Fresher","THOUGHTWORKS","Pune, Mumbai","20,000 a month","Fresher +2"),
      new JobDetailsType("Backend Developer-Fresher","DELOITTE","Delhi","50,000 a month","Fresher +3"),
  ]
    const [currentJob,setCurrentJob]= useState(jobs[0]);
    const jobClick=(job:JobDetailsType)=>{
      setCurrentJob(job);
    }
    return (
        <ErrorBoundary>
          <div className="content">
            <div className="top">
              <h1>seachbar and location bar goes here</h1>
            </div>
            <div className="down">
              <div className="left">
                {
                  jobs.map((element:JobDetailsType)=>(
                    <JobFeed jobd={element} jobClick={jobClick}/>
                  ))
                }
              </div>
              <div className="right">
                <JobDetails jobd={currentJob} />
              </div>
            </div>
          </div>
        </ErrorBoundary>
    );
};

export default Home;
