import React from 'react';
import JobDetails from '../Home/JobDetails';
// import JobFeed from '../Home/JobFeed';
import { getJobByUser } from '../../services/Jobs';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Job } from '../../components/DataModels/Job';
import { JobFeed } from '../../components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HistoryOfJobsPosted from './HistoryOfJobsPosted';


const User=()=>{
  const [jobs,setJobs]=React.useState([]);
  const [currentJob,setCurrentJob]= React.useState(null);
  const [view,setView]= React.useState('hide');
  const [page,setPage]=React.useState(0);
  const [hasMoreJobs,setHasMoreJobs]=React.useState(true);
  const jobClick=(job: Job,currentView:string)=>{
    setView(currentView);
    setCurrentJob(job);
  };
  React.useEffect(()=>{
    const fetchData=async(page:Number) => {
      const res = await getJobByUser(page);
      if(res.data.length==0){
        setHasMoreJobs(false);
        return;
      }
      if(res){
        setJobs([...jobs,...res.data]);
      }
      
    };
    fetchData(page);

  },[]);
  
  return(
    
    <div className='userDashboard'>
      <div className='box leftAlign'>
        Dashboard
      </div>
      <Router>
        <Switch>
          <Route exact path='/' >
            <HistoryOfJobsPosted />
          </Route>
          <Route  path='/userdashboard/home' > <h1>h1</h1> </Route>
        </Switch>
      </Router>
    </div>  
  );
};
export default User;