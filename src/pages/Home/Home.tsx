import React ,{useState} from 'react';
import { useRef } from 'react';
import JobFeed from './JobFeed';
import JobDetails from './JobDetails';
import './Home.scss';
import { ErrorBoundary,Searchbar, Location } from '../../components';
import  FormData  from '../../components/DataModels/FormData';
import data from '../../components/SearchBar/data';
import { fetchJobs } from '../../services/Jobs';
import { Job } from '../../components/DataModels/Job';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchRecomendedJobs } from '../../services/Jobs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
  const [currentJob,setCurrentJob]= useState(null);
  const [view,setView]= useState('hide');
  const [jobs,setJobs]=React.useState([]);
  const [selectedJob,setSelectedJob]=React.useState('');
  const [job,setJob] =React.useState([]);
  const [page,setPage]=React.useState(0);
  const [checkHasMore,setCheckHasMore]=React.useState(true);
  const [recomendedJobs,setRecomendedJobs]=React.useState([]);

  const sliderRef = useRef(null);
    
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 1000 
  };
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

  const jobClick=(job:FormData,currentView:string)=>{
    setView(currentView);
    setCurrentJob(job);
  };
  React.useEffect(()=>{
    fetchRecomendedData();
  },[]);
  const fetchRecomendedData=async()=>{
    const res = await fetchRecomendedJobs();
    if(res){
      const newJobs=res.data;
      setRecomendedJobs([...recomendedJobs,...newJobs]);
    }
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
        {(recomendedJobs.length<=3 && recomendedJobs.length!==0)&&
          <div>
            {recomendedJobs.map((element)=>(
              <div className="carousel-card" key={element._id}>
                <div className="card-content">
                  <img src={element.company.logo} alt="Text" />
                  <h1>{element.company.name}</h1>
                </div>
                <div className="badge">Famous</div> 
              </div>
            ))}
          </div>
        }
        {recomendedJobs.length>3 &&
        <div className="carousel-container">
        
          <Slider {...settings} ref={sliderRef}>
            {recomendedJobs.map((element)=>(
              <div className="carousel-card" key={element._id}>
                <div className="card-content">
                  <img src={element.company.logo} alt="Text" />
                  <h1>{element.company.name}</h1>
                </div>
                <div className="badge">Famous</div> 
              </div>
            ))}
          
        
          </Slider>
          <div style={{ textAlign: 'center' }}>
            <button className="prevButton" onClick={previous}>
          &lt;
            </button>
            <button className="nextButton" onClick={next}>
          &gt;
            </button>
          </div>
        </div>
        }
        <div className="down">
          <div className={view==='hide'?'show':window.screen.width>900?'show':'hide'}>
            <InfiniteScroll
              dataLength={jobs.length}
              hasMore={checkHasMore}
              next={()=>setPage(jobs.length)}
              loader={<h4>Loading...</h4>}
            >
              { job.map((element:FormData)=>(
                <JobFeed key={element._id} jobd={element} jobClick={jobClick} />
              )) }
            </InfiniteScroll>
          </div>
          <div className={view}>
            {currentJob && <JobDetails key={currentJob._id} jobd={currentJob} jobClick={jobClick} disablePreview={null} isHome={true} />}
          </div>
        </div>
        {!checkHasMore && <h4 className='endingMessage'>We have these jobs only...</h4>}
      </div>
    </ErrorBoundary>
  );
};

export default Home;
