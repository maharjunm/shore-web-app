import React,{useState} from 'react';
import { ErrorBoundary } from '../../components';
import  FormData  from '../../components/DataModels/FormData';
import './Form.scss';
import JobDetails from '../Home/JobDetails';
import validate from './validate';
import{
  JobTitleSection,
  CompanyDetailsSection,
  CompanyLocationSection,
  JobDates,
  QualificationsSection,
  DutiesSection,
  SalarySection,
  SubmitSection } from './FormSections/';

const defaultForm:FormData = {
  qualifications:null,
  duties:null,
  title:'',
  qualification:'',
  discipline:null,
  experience:'',
  companyName:'',
  companyType:'',
  companyLogo:null,
  city:'',
  state:'',
  country:'',
  region:'',
  postingDate:null,
  expiryDate:null,
  appClosingDate:null,
  removingJobDate:null,
  salary:null,
  hours:null,
  jobType:'',
};

const Form = () => {

  const [preview, setPreview] = useState('form show');
  const [currentJobView, setCurrenetJobView]=useState(null);
  const [form,setForm] = useState(defaultForm);
  const [errorMessage, setErrorMessage]= useState(null);

  const updateForm = (field: string,value: any)=>{
    console.log(form);
    setForm((updatedForm:FormData) =>{
      return {
        ...updatedForm,
        [field]: value
      };
    });
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

  const onSubmit = (e:any) =>{
    e.preventDefault();
  };

  return (
    <ErrorBoundary>
      {currentJobView && <JobDetails key={currentJobView.title} jobd={currentJobView} jobClick={null} disablePreview={disablePreview} isHome={false} />}
      <form className={preview} onSubmit={onSubmit} >
        <div className="superSection">
          <div className="sections">
            <div className="upside">
              <div className="headTitle">Post A Job </div>
            </div>
          </div>
          <div className="sections">
            <JobTitleSection updateForm={updateForm}  />
            <CompanyDetailsSection updateForm={updateForm} />
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
            <button type="submit" className="btnstyle" >Submit</button>
          </div>
        </div>
      </form>
    </ErrorBoundary>
  );
};

export default Form;
