import React,{useState} from 'react';
import { ErrorBoundary } from '../../components';
import  {JobDet}  from '../../components/DataModels/JobDet';
import './Form.scss';
import JobDetails from '../Home/JobDetails';
import validate from './validate';
const Form = () => {
  const [preview,setPreview] = useState('form show');
  const [currentJobView,setCurrenetJobView]=useState(null);
  const [qualifications,setQualifications] = useState([]);
  const [qualification,setQualification] = useState('');
  const [duties,setDuties]= useState([]);
  const [duty,setDuty]=useState('');
  const [errorMessage,setErrorMessage]= useState(null);
  const updateQualification = (e:any)=>{
    setQualification(e.target.value);
  };
  const removeQualification = (id:string)=>{
    const newQualifications=qualifications.filter((qualification)=>qualification.id!=id);
    setQualifications(newQualifications);
  };
  const addQualification = ()=>{
    if(qualification.trim()===''){
      return;
    }
    setQualifications([
      ...qualifications,{id:qualification,value:qualification}
    ]);
    setQualification('');
  };
  const updateDuty = (e:any)=>{
    setDuty(e.target.value);
  };
  const removeDuty = (id:string)=>{
    const newDuties=duties.filter((duty)=>duty.id!=id);
    setDuties(newDuties);
  };
  const addDuty = ()=>{
    if(duty.trim()===''){
      return;
    }
    setDuties([
      ...duties,{id:duty,value:duty}
    ]);
    setDuty('');
  };
  const showPreview = (jobView:JobDet) =>{
    setCurrenetJobView(jobView);
  };
  const disablePreview = () =>{
    setCurrenetJobView(null);
    setPreview('form show');
  };
  const previewBtnHandler = (e:any) =>{
    e.preventDefault();
    let form=e.target.form;

    let jobView={
      job:{
        title:form.title.value,
        qualification:form.qual.value,
        experience:form.exp.value,
      },
      company:{
        name:form.orgName.value,
        type:form.orgType.value,
        logo:form.orgLogo.value,
      },
      location:{
        city:form.city.value,
        state:form.state.value,
        country:form.country.value,
        region:form.region.value,
      },
      dates:{
        postingDate:new Date(form.pDate.value),
        expiryDate:new Date(form.eDate.value),
        closingDate:new Date(form.appClosingDate.value),
        removingJobDate:new Date(form.remJobDate.value),
      },
      salary:{
        sal:form.salary.value,
        hours:form.hours.value,
        type:form.jobType.value,
      },
      qualifications:qualifications.map((qualification)=>{return qualification.value;}),
      duties:duties.map((duty)=>{return duty.value;}),
    };

    if(validate(jobView)){
      console.log('okay');
      setPreview('form hide');
      showPreview(jobView);
    }else{
      setErrorMessage('Please fill the form ...');
    }

  };

  return (
    <ErrorBoundary>
      {currentJobView && <JobDetails key={currentJobView.job.title} jobd={currentJobView} jobClick={null} disablePreview={disablePreview} from="postajob" />}
      <form className={preview} >
        <div className="superSection">
          <div className="sections">
            <div className="upside">
              <div className="headTitle">Post A Job</div>
            </div>
          </div>
          <div className="sections">
            <div className="side">
              <div className="headTitle">Job Details</div>
              <div className="row">
                <label htmlFor="title">Job Title</label>
                <input type="text" name="title" required id="title" />
              </div>
              <div className="row">
                <label htmlFor="qual">Qualification</label>
                <input type="text" name="qual" required id="qual" />
              </div>
              <div className="row">
                <label htmlFor="exp">Experience</label>
                <input type="text" name="exp" required id="exp" />
              </div>
            </div>
            <div className="side">
              <div className="headTitle">Company Details</div>
              <div className="row">
                <label htmlFor="orgName">Company Name</label>
                <input type="text" name="orgName" required id="orgName" />
              </div>
              <div className="row">
                <label htmlFor="orgType">Organization Type</label>
                <input type="text" name="orgType" required id="orgType" />
              </div>
              <div className="row">
                <label htmlFor="orgLogo"> Logo</label>
                <input type="file" className="input" required name="orgLogo" id="orgLogo" />
              </div>
            </div>
          </div>
          <div className="sections">
            <div className="side">
              <div className="headTitle">Location Details</div>
              <div className="row">
                <label htmlFor="city">City</label>
                <input type="text" name="city" required id="city" />
              </div>
              <div className="row">
                <label htmlFor="state">State</label>
                <select className="input" required name="state" id="state">
                  <option value="">select</option>
                  <option value="india">Telangana</option>
                  <option value="us">Kerela</option>
                  <option value="canada">TamilNadu</option>
                  <option value="england">Maharastra</option>
                </select>
              </div>
              <div className="row">
                <label htmlFor="country">Country</label>
                <select className="input" required name="country" id="country">
                  <option value="">select</option>
                  <option value="india">India</option>
                  <option value="us">US</option>
                  <option value="canada">Canada</option>
                  <option value="england">England</option>
                </select>
              </div>
              <div className="row">
                <label htmlFor="region">Region</label>
                <input type="text" name="region" required id="region" />
              </div>
            </div>
            <div className="side">
              <div className="headTitle">Dates</div>
              <div className="row">
                <label htmlFor="pDate">Posting Date</label>
                <input className="input" min={new Date().toISOString().split('T')[0]} type="date" required name="pDate" id="pDate" />
              </div>
              <div className="row">
                <label htmlFor="eDate">Expiry Date</label>
                <input className="input" min={new Date().toISOString().split('T')[0]} type="date" required name="eDate" id="eDate" />
              </div>
              <div className="row">
                <label htmlFor="appClosingDate">Closing Job</label>
                <input className="input" min={new Date().toISOString().split('T')[0]} type="date" required name="appClosingDate" id="appClosingDate" />
              </div>
              <div className="row">
                <label htmlFor="remJobDate">Removing Job</label>
                <input className="input" min={new Date().toISOString().split('T')[0]} type="date" required name="remJobDate" id="remJobDate" />
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
                <input type="text" name="extraq" onChange={updateQualification} id="qlinput" placeholder="EX:BTech CSE" />
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
                <input type="text" name="extraq"  onChange={updateDuty} id="rrinput" placeholder="EX:FrontEnd Developer" />
                <button type="button"  onClick={addDuty} className="addBtn" >Add+</button>
              </div>
            </div>
          </div>
          <div className="sections">
            <div className="side">
              <div className="headTitle">Salary Details</div>
              <div className="row">
                <label htmlFor="salary">Salary</label>
                <input type="text" name="salary" required id="salary" />
              </div>
              <div className="row">
                <label htmlFor="hours">Job Hours</label>
                <input type="text" name="hours" required id="hours" />
              </div>
              <div className="row">
                <label htmlFor="jobType">Job Type</label>
                <select className="input" required name="jobType" id="jobType">
                  <option value="">select</option>
                  <option value="regular">Regular</option>
                  <option value="permanent">Parmanent</option>
                </select>
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
                <input type="mail" name="sub"  id="sub" placeholder="example@gmail.com" />
              </div>
              <div className="row">
                <label htmlFor="sub">Employer ID</label>
                <input type="mail" name="sub"  id="sub" placeholder="example@gmail.com" />
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
