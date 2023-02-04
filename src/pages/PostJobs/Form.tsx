import React,{useState} from 'react';
import { ErrorBoundary } from '../../components';
import  FormData  from '../../components/DataModels/FormData';
import './Form.scss';
import JobDetails from '../Home/JobDetails';
import validate from './validate';

const defaultForm:FormData = {
  qualifications:[],
  duties:[],
  title:'',
  qualification:'',
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
const defaultErroMessages = { name: false };

const Form = () => {
  const [preview, setPreview] = useState('form show');
  const [currentJobView, setCurrenetJobView]=useState(null);
  const [form,setForm] = useState(defaultForm);
  const [qualification, setQualification] = useState('');
  const [qualifications, setQualifications] = useState([]);
  const [duties, setDuties]= useState([]);
  const [duty, setDuty]=useState('');
  const [errorMessage, setErrorMessage]= useState(null);
  const [errorMessages, setErrorMessages]= useState(defaultErroMessages);
  const inputErrorMessage='*Required';

  const updateForm = (field: string,value: any)=>{
    setForm((updatedForm:FormData) =>{
      return {
        ...updatedForm,
        [field]: value
      };
    });
    if(!(Array.isArray(value))){
      console.log(value);
      onBlur(field,value);
    }
  };

  const onBlur = (field: string, value: any)=>{
    const status=!value.trim()?true:false;
    setErrorMessages((updatedErrorMessages)=>{
      return {
        ...updatedErrorMessages,
        [field]: status
      };
    });
  };
  const updateQualification = (e: any)=>{
    setQualification(e.target.value);
  };

  const removeQualification = (id: string)=>{
    const newQualifications=qualifications.filter((qualification)=>qualification.id!=id);
    setQualifications(newQualifications);
    updateForm('qualifications',newQualifications);
  };

  const addQualification = ()=>{
    if(!qualification.trim()){
      return;
    }
    setQualifications([
      ...qualifications,{id:qualification,value:qualification}
    ]);
    updateForm('qualifications',qualifications);
    setQualification('');
  };

  const updateDuty = (e:any)=>{
    setDuty(e.target.value);
  };

  const removeDuty = (id:string)=>{
    const newDuties=duties.filter((duty)=>duty.id!=id);
    setDuties(newDuties);
    updateForm('duties',newDuties);
  };

  const addDuty = ()=>{
    if(!duty.trim()){
      return;
    }
    setDuties([
      ...duties,{id:duty,value:duty}
    ]);
    updateForm('duties',duties);
    setDuty('');
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
      setErrorMessage('Please fill the form ...');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };

  return (
    <ErrorBoundary>
      {currentJobView && <JobDetails key={currentJobView.title} jobd={currentJobView} jobClick={null} disablePreview={disablePreview} from="postajob" />}
      <form className={preview} >
        <div className="superSection">
          <div className="sections">
            <div className="upside">
              <div className="headTitle">Post A Job </div>
            </div>
          </div>
          <div className="sections">
            <div className="side">
              <div className="headTitle">Job Details</div>
              <div className="row">
                <label htmlFor="title">Job Title</label>
                <div className="flexdown">
                  <input
                    type="text"
                    name="title"
                    onChange={(e)=>updateForm('title',e.target.value)}
                    onBlur={(e)=>onBlur('title',e.target.value)}
                    required
                    id="title"
                  />
                </div>
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['title'] && inputErrorMessage }</span>
              </div>
              <div className="row">
                <label htmlFor="qualification">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  onChange={(e)=>updateForm('qualification',e.target.value)}
                  onBlur={(e)=>onBlur('qualification',e.target.value)}
                  required
                  id="qualification"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['qualification'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="experience">Experience</label>
                <input
                  type="text"
                  name="experience"
                  onChange={(e)=>updateForm('experience',e.target.value)}
                  onBlur={(e)=>onBlur('experience',e.target.value)}
                  required
                  id="experience"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['experience'] && inputErrorMessage}</span>
              </div>
            </div>
            <div className="side">
              <div className="headTitle">Company Details</div>
              <div className="row">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  onChange={(e)=>updateForm('companyName',e.target.value)}
                  onBlur={(e)=>onBlur('companyName',e.target.value)}
                  required
                  id="companyName"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['companyName'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="companyType">Organization Type</label>
                <input
                  type="text"
                  name="companyType"
                  onChange={(e)=>updateForm('companyType',e.target.value)}
                  onBlur={(e)=>onBlur('companyType',e.target.value)}
                  required
                  id="companyType"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['companyType'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="companyLogo"> Logo</label>
                <input
                  type="file"
                  className="input"
                  name="compnayLogo"
                  onChange={(e)=>updateForm('companyLogo',e.target.files)}
                  onBlur={(e)=>onBlur('companyLogo',e.target.files)}
                  required
                  id="compnayLogo" />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['companyLogo'] && inputErrorMessage}</span>
              </div>
            </div>
          </div>
          <div className="sections">
            <div className="side">
              <div className="headTitle">Location Details</div>
              <div className="row">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  onChange={(e)=>updateForm('city',e.target.value)}
                  onBlur={(e)=>onBlur('city',e.target.value)}
                  required
                  id="city"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['city'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  name="state"
                  onChange={(e)=>updateForm('state',e.target.value)}
                  onBlur={(e)=>onBlur('state',e.target.value)}
                  required
                  id="state"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['state'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  onChange={(e)=>updateForm('country',e.target.value)}
                  onBlur={(e)=>onBlur('country',e.target.value)}
                  required
                  id="country"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['country'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="region">Region</label>
                <input
                  type="text"
                  name="region"
                  onChange={(e)=>updateForm('region',e.target.value)}
                  onBlur={(e)=>onBlur('region',e.target.value)}
                  required
                  id="region"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['region'] && inputErrorMessage}</span>
              </div>
            </div>
            <div className="side">
              <div className="headTitle">Dates</div>
              <div className="row">
                <label htmlFor="postingDate">Posting Date</label>
                <input
                  className="input"
                  min={new Date().toISOString().split('T')[0]}
                  max={new Date('9999-12-30').toISOString().split('T')[0]}
                  type="date" required
                  name="postingDate"
                  onChange={(e)=>updateForm('postingDate',e.target.value)}
                  onBlur={(e)=>onBlur('postingDate',e.target.value)}
                  id="postingDate"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['postingDate'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  className="input"
                  min={new Date().toISOString().split('T')[0]}
                  max={new Date('9999-12-30').toISOString().split('T')[0]}
                  type="date"
                  required
                  name="expiryDate"
                  onChange={(e)=>updateForm('expiryDate',e.target.value)}
                  onBlur={(e)=>onBlur('expiryDate',e.target.value)}
                  id="expiryDate"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['expiryDate'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="appClosingDate">Closing Job</label>
                <input
                  className="input"
                  min={new Date().toISOString().split('T')[0]}
                  max={new Date('9999-12-30').toISOString().split('T')[0]}
                  type="date"
                  required
                  name="appClosingDate"
                  onChange={(e)=>updateForm('appClosingDate',e.target.value)}
                  onBlur={(e)=>onBlur('appClosingDate',e.target.value)}
                  id="appClosingDate"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['appClosingDate'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="removingJobDate">Removing Job</label>
                <input
                  className="input"
                  min={new Date().toISOString().split('T')[0]}
                  max={new Date('9999-12-30').toISOString().split('T')[0]}
                  type="date"
                  required
                  name="removingJobDate"
                  onChange={(e)=>updateForm('removingJobDate',e.target.value)}
                  onBlur={(e)=>onBlur('removingJobDate',e.target.value)}
                  id="removingJobDate"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['removingJobDate'] && inputErrorMessage}</span>
              </div>
            </div>
          </div>
          <div className="sections">
            <div className="side">
              <div className="headTitle">Extra Qualifications and Skills</div>
              <ul>
                {
                  qualifications.map((qualification)=>(
                    <li key={qualification.id}>{qualification.value}
                      <span  onClick={()=>removeQualification(qualification.id)}>x</span>
                    </li>
                  ))
                }
              </ul>
              <div className="row">
                <input type="text" name="extraqualification"  onChange={updateQualification} id="qlinput" placeholder="EX:BTech CSE" />
                <button type="button"  onClick={addQualification} className="addBtn" >Add+</button>
              </div>
            </div>
            <div className="side">
              <div className="headTitle">Job Dudies</div>
              <ul>
                {
                  duties.map((duty)=>(
                    <li key={duty.id}>{duty.value}
                      <span onClick={()=>removeDuty(duty.id)}>x</span>
                    </li>
                  ))
                }
              </ul>
              <div className="row">
                <input type="text" name="extraDuty"  onChange={updateDuty} id="rrinput" placeholder="EX:FrontEnd Developer" />
                <button type="button"  onClick={addDuty} className="addBtn" >Add+</button>
              </div>
            </div>
          </div>
          <div className="sections">
            <div className="side">
              <div className="headTitle">Salary Details</div>
              <div className="row">
                <label htmlFor="salary">Salary</label>
                <input
                  type="number"
                  name="salary"
                  onChange={(e)=>updateForm('salary',e.target.value)}
                  onBlur={(e)=>onBlur('salary',e.target.value)}
                  required
                  id="salary"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['salary'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="hours">Job Hours</label>
                <input
                  type="number"
                  name="hours"
                  onChange={(e)=>updateForm('hours',e.target.value)}
                  onBlur={(e)=>onBlur('hours',e.target.value)}
                  required
                  id="hours"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['hours'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="jobType">Job Type</label>
                <select
                  className="input"
                  required
                  name="jobType"
                  id="jobType"
                  onChange={(e)=>updateForm('jobType',e.target.value)}
                  onBlur={(e)=>onBlur('jobType',e.target.value)}
                >
                  <option value="">select</option>
                  <option value="regular">Regular</option>
                  <option value="permanent">Parmanent</option>
                </select>
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['jobType'] && inputErrorMessage}</span>
              </div>
            </div>
            <div className="side">
              <div className="headTitle">How to Submit Apply via</div>
              <div className="font-small">
                <label htmlFor="mail">By Email</label>
                <input type="checkbox" name="sub" id="mail" />
                <label htmlFor="emp">Employer’s ID</label>
                <input type="checkbox" name="sub" id="emp" />
              </div>
              <div className="row">
                <label htmlFor="sub">Email ID</label>
                <input
                  type="mail"
                  name="submisionEmail"
                  onChange={(e)=>updateForm('submisionEmail',e.target.value)}
                  onBlur={(e)=>onBlur('submisionEmail',e.target.value)}
                  id="sub"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['submisionEmail'] && inputErrorMessage}</span>
              </div>
              <div className="row">
                <label htmlFor="sub">Employer ID</label>
                <input
                  type="mail"
                  name="employersEmail"
                  onChange={(e)=>updateForm('employersEmail',e.target.value)}
                  onBlur={(e)=>onBlur('employersEmail',e.target.value)}
                  id="sub"
                  placeholder="example@gmail.com" />
              </div>
              <div className="ErrorBox">
                <span className="inputErrorMesg">{errorMessages['employersEmail'] && inputErrorMessage}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sections">
          <div className="downside">
            <p className="errorMessage">{errorMessage}</p>
          </div>
          <div className="downside">
            <button type="submit" onClick={previewBtnHandler} className="btnstyle" >Preview</button>
            <button type="submit" className="btnstyle" >Submit</button>
          </div>
        </div>
      </form>
    </ErrorBoundary>
  );
};

export default Form;
