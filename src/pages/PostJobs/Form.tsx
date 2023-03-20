import React,{useState, useContext} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ErrorBoundary } from '../../components';
import  FormData  from '../../components/DataModels/FormData';
import './Form.scss';
import JobDetails from '../Home/JobDetails';
import validate from './validate';
import { postJob } from '../../services/Jobs';
import ReactS3Client from 'karma-dev-react-aws-s3-typescript';
import { REACT_ACCESSKEY, REACT_BACKEND_URL, REACT_BUCKETNAME, REACT_DIRNAME, REACT_REGION, REACT_SC } from '../../config';
import { UserContext } from '../../pages/HomePage/HomePage';
import { useSelector } from 'react-redux';
import { selectPaymentStatus } from '../../store/Payments/selector';
import { RootState } from '../../store/configureStore';
import{
  JobTitleSection,
  CompanyDetailsSection,
  CompanyLocationSection,
  JobDates,
  QualificationsSection,
  DutiesSection,
  SalarySection,
  SubmitSection } from './FormSections/';
import axios from 'axios';


const defaultForm:FormData = {
  _id:null,
  job: {
    title: '',
    experience: '',
    type: 'Full-time',
    qualification:'',
  },
  company: {
    name: '',
    companyType: '',
    logo: '',
  },
  location: {
    city: '',
    country: '',
    region: '',
    state:'',
  },
  dates: {
    postingDate: null,
    expiryDate: null,
    closingDate: null,
    removingDate: null,
  },
  salary: {
    sal: null,
    hours: null,
    companyType: 'Annual',
  },
  qualifications:null,
  discipline:null,
  duties:null,
  contact:{
    email:'',
    employeeEmail:'',
  },
  status:'Pending'
};

const Form = () => {

  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const location= useLocation();
  const product = location.state;
  const  paymentStatus  = useSelector((state:RootState) => {
    return selectPaymentStatus(state);
  });
  const redirect = !paymentStatus &&  !(product && product.type==='Regular');
  const s3Config = {
    bucketName:REACT_BUCKETNAME,
    dirName: REACT_DIRNAME,
    region: REACT_REGION,
    accessKeyId: REACT_ACCESSKEY,
    secretAccessKey: REACT_SC,
  };


  const [preview, setPreview] = useState('form show');
  const [currentJobView, setCurrenetJobView]=useState(null);
  const [form,setForm] = useState(defaultForm);
  const [errorMessage, setErrorMessage]= useState(null);
  const [file,setFile] = useState<File>();
  const [ formStatus, setFormStatus ] = useState('Submit');

  const handleLogo=async(file: File)=>{
    setFile(file);
    const s3=new ReactS3Client(s3Config);
    try{
      let res=await s3.uploadFile(file);
      updateForm('company.logo',res.location);
    }
    catch(e){
      console.log('error in uploading to s3 bucket',e);
      updateForm('company.logo','xyz.jpg');
    }
  };
  const updateForm = (field: string, value: any) => {
    if(field === 'Logo'){
      handleLogo(value);
      return;
    }
    setForm((prevForm) => {
      const [section, subfield] = field.split('.');
      if (section === 'qualifications' || section === 'duties') {
        return {
          ...prevForm,
          [section]: value,
        };
      }
      if (section === 'discipline') {
        return {
          ...prevForm,
          [section]: value.map((discipline: string) => discipline.trim()),
        };
      }
      return {
        ...prevForm,
        [section]: {
          ...prevForm[section],
          [subfield]: value
        },
      };
    });
    console.log(form);
  };




  const showPreview = (jobView:FormData) =>{
    setCurrenetJobView(jobView);
  };

  const disablePreview = () =>{
    setCurrenetJobView(null);
    setPreview('form show');
  };

  const previewBtnHandler = (e:any) =>{
    e.preventDefault();
    let jobView;
    if((jobView=validate(form))){
      setPreview('form hide');
      showPreview(jobView);
    }else{
      setErrorMessage('Mandatory fields are missing ...');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };
  const onSubmit=async(event:any)=>{
    event.preventDefault();
    setFormStatus('Submitting...');
    if(!!validate(form)){
      const res = await postJob({form});
      if(res){
        window.alert('successfully posted job');
        setFormStatus('Submit');
        history.push('/postajob');
      }else{
        setErrorMessage('Something went wrong ...');
      }
    }else{
      setErrorMessage('Mandatory fields are missing ...');
    }
    setFormStatus('Submit');
    setTimeout(() => {
      setErrorMessage('');
    }, 2000);
  };


  if(!state){
    history.push('/login');
    return ;
  }
  if(redirect){
    history.push('/profile');
    return ;
  }
  return (
    <ErrorBoundary>
      {currentJobView && <JobDetails key={currentJobView.job.title} jobd={currentJobView} jobClick={null} disablePreview={disablePreview} isHome={false} />}
      <form className={preview} onSubmit={onSubmit}>
        <div className="superSection">
          <div className="sections">
            <div className="upside">
              <div className="headTitle">Post A Job </div>
            </div>
          </div>
          <div className="sections">
            <JobTitleSection updateForm={updateForm}  />
            <CompanyDetailsSection updateForm={updateForm}  />
          </div>
          <div className="sections">
            <CompanyLocationSection updateForm={updateForm} />
            <JobDates updateForm={updateForm}  />
          </div>
          <div className="sections">
            <QualificationsSection updateForm={updateForm} />
            <DutiesSection updateForm={updateForm} />
          </div>
          <div className="sections">
            <SalarySection updateForm={updateForm}  />
            <SubmitSection updateForm={updateForm}  />
          </div>
        </div>
        <div className="sections">
          <div className="downside">
            <p className="errorMessage">{errorMessage}</p>
          </div>
          <div className="downside">
            <button type="button" onClick={previewBtnHandler} className="btnstyle" >Preview</button>
            <button type="submit" className="btnstyle" >{formStatus}</button>
          </div>
        </div>
      </form>
    </ErrorBoundary>
  );
};

export default Form;
