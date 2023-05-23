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
import { useHistory, useLocation } from 'react-router-dom';
const  defaultSearch:SearchData= {
  jobTitle:'',
  location:'',
  salary:100,
  discipline:[],
  region:[],
  sector:[],
  title:[],
};

const SearchPage = () => {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const searchStatus= useSelector((state:RootState)=>{
    return selectSearch(state);
  });
  const [ search , setSearch ] = useState(()=>{
    console.log('ss',searchStatus.status);
    if(location.state){
      const { jobTitle, locationValue } = location.state;
      if(jobTitle || locationValue){
        defaultSearch.jobTitle= jobTitle,
        defaultSearch.location = locationValue;
        return defaultSearch;
      }
    }
    return searchStatus.status;
  });
  const [discipline, setDicipline] = useState(()=>searchStatus.status.discipline);
  const [sector, setSector] = useState(()=>searchStatus.status.sector);
  const [region, setRegion] = useState(()=>searchStatus.status.region);
  const [title, setTitle] = useState(()=>searchStatus.status.title);

  const [jobs,setJobs]=React.useState([]);
  const [checkHasMore,setCheckHasMore] = useState(true);
  const [ page, setPage ] = useState(0);
  const disciplines = ['Life Sciences', 'Physics', 'Biomedicine','Health Sciences','Engineering','Chemistry','Computer Science','Applied Science','Nanotechnology','Earth Sciences','Environmental','Sciences','Veterinary','Fisheries','Agriculture','Forestry'];
  const sectors = ['Academia','Industry','Government','Healthcare/Hospital','Non-Profit','Media/Communications'];
  const regions = ['North America','Europe','Asia','South America','Asia Pacific','Australia','Middle East','Oceania','Working from home'];
  const titles = ['Academic Dean/Dept. Head','Faculty','Group Leader/Principal Invesigator','Lab Manager',
    'Lecturer/Senior Lecturer','Manager','Medical Doctor','PhD Fellowship','PhD Studentship',
    'Postdoc Fellowship','President/CEO/Director/VP','Project Manager','Research Scientist','Senior Scientist',
    'Staff Scientist','Student Fellowship','Technician'];
  const fetchData=async(page:number)=>{
    const res = await getSearchJobs(search,page);
    if(res.data.length==0){
      setCheckHasMore(false);
      return ;
    }
    if(res){
      const newJobs = res.data;
      setJobs(newJobs);
    }
  };
  const calculateSalary = (sal:any)=>{
    const salary = 100-sal;
    return (salary*400);
  };
  React.useEffect(()=>{
    fetchData(page);
  },[page]);
  const updateArray = (field:string,value:string[])=>{
    if(field==='discipline'){
      setDicipline(value);
      return ;
    }
    if(field==='sector'){
      setSector(value);
      return ;
    }
    if(field==='title'){
      setTitle(value);
      return ;
    }
    setRegion(value);
  };
  const updateSearchContents = ( field:string,value:string|number|string[]) => {
    if(typeof(value)==='string'){
      value= value.trim();
    }
    console.log(search.discipline);
    setSearch((prevSearch)=>{
      const updatedSearch = {
        ...search,
        [field]:value,
      };
      dispatch(updateSearch({status:updatedSearch}));
      return {
        ...prevSearch,
        [field]: value,
      };
    });
  };
  const onSubmit = async (e: any)=>{
    e.preventDefault();
    const searchJobs = await getSearchJobs(search,page);
    console.log(searchJobs);
    if(!searchJobs || searchJobs.data.length===0){
      setCheckHasMore(false);
      setJobs([]);
      return ;
    }
    const newJobs = searchJobs.data;
    setJobs(newJobs);
    return ;
  };
  const resetForm = ()=>{
    localStorage.removeItem('search');
    setSearch(defaultSearch);
  };
  return (
    <div className="viewBox">
      <Highlights updateSearch={updateSearchContents} />
      <div className="jobsCount">
        <h1>Found {jobs.length } Jobs that matches your search</h1>
      </div>
      <div className="search">
        <div className="searchFields">
          <form onSubmit={onSubmit} >
            <div className='inputContent'>
              <label> Job Title </label>
              <input 
                type="text"  
                placeholder='eg:Research Scientist' 
                onChange={(e)=>updateSearchContents('jobTitle',e.target.value)}
                value={search.jobTitle}
              />
            </div>
            <div className='inputContent'>
              <label> Location </label>
              <input 
                type="text" 
                placeholder='eg:Bangloor'
                onChange={(e)=>updateSearchContents('location',e.target.value)}
                value={search.location}
              />
            </div>
            <div className='inputContent'>
              <label> Atleast Salary </label>
              <input type="range" onChange={(e)=>{
                const sal = calculateSalary(e.target.value);
                updateSearchContents('salary',sal);
                
              }} value={100-search.salary/400} />
              <label className='flex space-around text-small'>
                <span>2K</span>
                <span>5K</span>
                <span>10K</span>
                <span>20K</span>
                <span>40K</span>
              </label>
            </div>
            <DropDown values={disciplines} name={'discipline'} updateSearchContents={updateSearchContents} selected={discipline} updateArray={updateArray} />
            <DropDown values={titles} name={'title'} updateSearchContents={updateSearchContents} selected={title} updateArray={updateArray} />
            <DropDown values={sectors} name={'sector'} updateSearchContents={updateSearchContents} selected={sector} updateArray={updateArray} />
            <DropDown values={regions} name={'region'} updateSearchContents={updateSearchContents}selected={region} updateArray={updateArray} />
            
            <div className='btnFlex'>
              <input type="submit"  value='Clear' onClick={resetForm} />
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
          {!checkHasMore && <h4 className='endingMessage'>No Jobs Found</h4>}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;