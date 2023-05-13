import React, { useState } from 'react';
import JobDetails from '../../Home/JobDetails';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../../services/Jobs';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import './FullJobView.scss';

export const FullJobView = () => {

  const jobId = useParams();
  const [ error, setError ] = useState('');
  const [ job, setJob ] = useState(null);

  const getJob = async (jobId:string)=>{
    const res = await getJobById(jobId);
    if(!res.data){
      setError('No Job Found!...');
      return ;
    }
    console.log(res.data);
    setJob(res.data);
  };
  React.useEffect(()=>{
    getJob(jobId);
  },[jobId]);
  return (
    <div className='searchedJob'>
      <div className="topElements">
        <div className='backArrow'><FA icon={faArrowLeftLong} /></div>
        <div className='errorBox'>{error}</div>
      </div>
      <div className='job'>
        { job && <JobDetails key={job._id} jobd={job} jobClick={null} disablePreview={null} isHome={false} />}
      </div>
    </div>
  );
};