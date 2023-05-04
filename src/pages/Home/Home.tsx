import React ,{useState,useRef} from 'react';
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
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const shuffle = (array:Job[]) => {
  for( var i=array.length-1;i>0;i--){
    var j = Math.floor(Math.random()*(i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const Home = () => {
  const [currentJob,setCurrentJob]= useState(null);
  const [view,setView]= useState('hide');
  const [jobs,setJobs]=React.useState([]);
  const [selectedJob,setSelectedJob]=React.useState('');
  const [job,setJob] =React.useState([]);
  const [page,setPage]=React.useState(0);
  const [checkHasMore,setCheckHasMore]=React.useState(true);
  const [recomendedJobs,setRecomendedJobs]=React.useState([]);
  const [slidingJobs,setSlidingJobs]=React.useState([]);
  const [slidingPage,setSlidingPage ] = useState(0);

  const jobSliderRef = useRef(null);
  const nextJob = () => {
    jobSliderRef.current.slickNext();
  };
  const previousJob = () => {
    jobSliderRef.current.slickPrev();
  };
  const jobSlides = Math.round(window.screen.width/400);
  const jobSlideSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: jobSlides,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 1000 
  };

  const logoSliderRef = useRef(null);
    
  const nextLogo = () => {
    logoSliderRef.current.slickNext();
  };

  const previousLogo = () => {
    logoSliderRef.current.slickPrev();
  };
  const logoSlides = Math.round(window.screen.width/200);
  const logoSlideSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: logoSlides,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 1000 
  };
  const fetchData=async(page:number)=>{
    const res = await fetchJobs(page);
    if(res.data.length==0){
      setCheckHasMore(false);
      return ;
    }
    
    if(res){
      const newJobs = res.data;
      shuffle(newJobs);
      setJobs([...jobs,...newJobs]);
      setCurrentJob(newJobs[0]);
      setView('show');
    }
  };
  const fetchRecomendedData=async(slidingPage:number)=>{
    const res = await fetchRecomendedJobs(slidingPage);
    if(res){
      const newJobs=res.data;
      shuffle(newJobs);
      setRecomendedJobs([...recomendedJobs,...newJobs]);
    }
  };
  React.useEffect(()=>{
    fetchRecomendedData(slidingPage);
    fetchData(page);
  },[slidingPage,page]);
  React.useEffect(()=>{
    let filteredJobs=jobs;
    if(filteredJobs){
      filteredJobs=jobs.filter(item => item.job.title.toLowerCase().includes(selectedJob.toLowerCase()));
    }
    setJob(filteredJobs);
  },[recomendedJobs,jobs]);
  const handleJobSelect=(jobName:string)=>{
    setSelectedJob(jobName);
  };

  const jobClick=(job:Job,currentView:string)=>{
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
        <div className="middle">
          {recomendedJobs.length!==0 &&
          <div className="carousel-container">
            <Slider {...jobSlideSettings} ref={jobSliderRef}>
              {recomendedJobs.map((element:Job)=>(
                <JobFeed key={element.job.title} jobd={element} jobClick={jobClick} />
              ))}

            </Slider>
            <div className='slideJobBtns'>
              <button className="jobPrevButton" onClick={previousJob}>
                <FA icon={faArrowLeft} />
              </button>
              <button className="jobNextButton" onClick={nextJob}>
                <FA icon={faArrowRight} />
              </button>
            </div>
          </div>
          }
        </div>
        {recomendedJobs.length<=logoSlides &&
        <div className="carousel-container-default">
          {recomendedJobs.map((element)=>(
            <div className="carousel-card" key={element._id}>
              <div className="card-content">
                <img src={element.company.logo} alt="Text" />
                <h1>{element.company.name}</h1>
              </div>
            </div>
          ))}
        </div>
        }
        {recomendedJobs.length>logoSlides &&
        <div className="carousel-container">
          <Slider {...logoSlideSettings} ref={logoSliderRef}>
            {recomendedJobs.map((element)=>(
              <div className="carousel-card" key={element._id}>
                <div className="card-content">
                  <img src={element.company.logo} alt="Text" />
                  <h1>{element.company.name}</h1>
                </div>
              </div>
            ))}
          </Slider>
          <div className='slideBtns'>
            <button className="prevButton" onClick={previousLogo}>
              <FA icon={faArrowLeft} />
            </button>
            <button className="nextButton" onClick={nextLogo}>
              <FA icon={faArrowRight} />
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
              { job.map((element:Job)=>(
                <JobFeed key={element._id} jobd={element} jobClick={jobClick} />
              )) }
            </InfiniteScroll>
            {!checkHasMore && <h4 className='endingMessage'>We have these jobs only...</h4>}
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