import React, { useState } from 'react';
import './SearchPage.scss';
import { Highlights } from '../../components';
import { SearchData } from '../../components/DataModels/SearchData';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Job } from '../../components/DataModels/Job';
import { fetchJobs, getSearchJobs } from '../../services/Jobs';
import JobFeed from '../Home/JobFeed';
import { DropDown } from './SeachUtils/DropDown';
import { selectSearch } from '../../store/SearchContent/selector';
import { updateSearch } from '../../store/SearchContent/reducer';
import { RootState } from '../../store/configureStore';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
const  defaultSearch:SearchData= {
  jobTitle:'',
  location:'',
  salary:0,
  discipline:new Set<string>(),
  country:new Set<string>(),
  sector:new Set<string>(),
};

const SearchPage = () => {
  
  const [ search , setSearch ] = useState(defaultSearch);
  const dispatch = useDispatch();
  const history = useHistory();
  const searchStatus = useSelector((state:RootState)=>{
    console.log(state);
    return selectSearch(state);
  });
  console.log(searchStatus);
  const [jobs,setJobs]=React.useState([]);
  const [checkHasMore,setCheckHasMore] = useState(true);
  const [ page, setPage ] = useState(0);
  const discipline = ['Life Sciences', 'Physics', 'Biomedicine','Health Sciences','Engineering','Chemistry','Computer Science','Applied Science','Nanotechnology','Earth Sciences','Environmental','Sciences','Veterinary','Fisheries','Agriculture','Forestry'];
  const sectors = ['Academia','Industry','Government','Healthcare/Hospital','Non-Profit','Media/Communications'];
  const countries = ['North America','Europe','Asia','South America','Asia Pacific','Australia','Middle East','Oceania','Working from home'];
  const fetchData=async(page:number)=>{
    const res = await fetchJobs(page);
    if(res.data.length==0){
      setCheckHasMore(false);
      return ;
    }
    if(res){
      const newJobs = res.data;
      setJobs([...jobs,...newJobs]);
    }
  };
  React.useEffect(()=>{
    fetchData(page);
  },[page]);
  const updateSearchContents = ( field:string,value:string|number|Set<string>) => {
    setSearch((prevSearch)=>{
      return {
        ...prevSearch,
        [field]: value,
      };
    });
    dispatch(updateSearch(search));
  };
  const onSubmit = (e:any )=>{
    e.preventDefault();
    dispatch(updateSearch(search));
    const searchJobs = getSearchJobs(search,page);
    return ;
  };
  return (
    <div className="viewBox">
      <Highlights />
      <div className="jobsCount">
        <h1>Found 59 Jobs that matches your search</h1>
      </div>
      <div className="search">
        <div className="searchFields">
          <form onSubmit={onSubmit} >
            <div className='inputBox'>
              <label> Job Title </label>
              <input 
                type="text"  
                placeholder='eg:Research Scientist' 
                onChange={(e)=>updateSearchContents('jobTitle',e.target.value)}
                value={search.jobTitle}
              />
            </div>
            <div className='inputBox'>
              <label> Location </label>
              <input 
                type="text" 
                placeholder='eg:Bangloor'
                onChange={(e)=>updateSearchContents('location',e.target.value)}
                value={search.location}
              />
            </div>
            <div className='inputBox'>
              <label> Salary </label>
              <input type="range" onChange={(e)=>updateSearchContents('salary',e.target.value)} />
              <label className='flex space-around text-small'>
                <span>1K</span>
                <span>2K</span>
                <span>5K</span>
                <span>10K</span>
                <span>20K</span>
              </label>
            </div>
            <DropDown values={discipline} name={'discipline'} updateSearchContents={updateSearchContents} />
            <DropDown values={sectors} name={'sector'} updateSearchContents={updateSearchContents} />
            <DropDown values={countries} name={'country'} updateSearchContents={updateSearchContents} />
            <div className='inputBox'>
              <input type="submit"  value='Search' />
            </div>
          </form>
        </div>
        <div className="searchContent">
          <InfiniteScroll
            dataLength={jobs.length}
            hasMore={checkHasMore}
            next={()=>setPage(jobs.length)}
            loader={<h4>Loading...</h4>}
          >
            { 
              jobs.map((element:Job)=>(
                <JobFeed key={element._id} jobd={element} jobClick={null}  viewBtn={true} />
              )) 
            }
          </InfiniteScroll>
          {!checkHasMore && <h4 className='endingMessage'>We have these jobs only...</h4>}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;