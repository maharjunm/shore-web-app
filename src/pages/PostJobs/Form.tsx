import React,{useState} from 'react';
import { ErrorBoundary } from '../../components';
import  {JobDet}  from '../../components/DataModels/JobDet';
import './Form.scss';
import JobDetails from '../Home/JobDetails';
const Form = () => {
    const [preview,setPreview] = useState(false);
    const previewBtnHandler = (e:any) =>{
      e.preventDefault();
      setPreview(true);
    }
    return (
      <ErrorBoundary>
        <form className={!preview?"form showform":"from hideform"}  id='form'>
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
                  <input type="text" name="title" id="title" />
                </div>
                <div className="row">
                  <label htmlFor="qual">Qualification</label>
                  <input type="text" name="qual" id="qual" />
                </div>
                <div className="row">
                  <label htmlFor="exp">Experience</label>
                  <input type="text" name="exp" id="exp" />
                </div>
              </div>
              <div className="side">
                <div className="headTitle">Company Details</div>
                <div className="row">
                  <label htmlFor="orgName">Company Name</label>
                  <input type="text" name="orgName" id="orgName" />
                </div>
                <div className="row">
                  <label htmlFor="orgType">Organization Type</label>
                  <input type="text" name="orgType" id="orgType" />
                </div>
                <div className="row">
                  <label htmlFor="orgLogo"> Logo</label>
                  <input type="file" className="input" name="orgLogo" id="orgLogo" />
                </div>
              </div>
            </div>
            <div className="sections">
              <div className="side">
                <div className="headTitle">Location Details</div>
                <div className="row">
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" id="city" />
                </div>
                <div className="row">
                  <label htmlFor="state">State</label>
                  <select className="input" name="state" id="state">
                    <option value="">select</option>
                    <option value="india">Telangana</option>
                    <option value="us">Kerela</option>
                    <option value="canada">TamilNadu</option>
                    <option value="england">Maharastra</option>
                  </select>
                </div>
                <div className="row">
                  <label htmlFor="country">Country</label>
                  <select className="input" name="country" id="country">
                    <option value="">select</option>
                    <option value="india">India</option>
                    <option value="us">US</option>
                    <option value="canada">Canada</option>
                    <option value="england">England</option>
                  </select>
                </div>
                <div className="row">
                  <label htmlFor="region">Region</label>
                  <input type="text" name="region" id="region" />
                </div>
              </div>
              <div className="side">
                <div className="headTitle">Dates</div>
                <div className="row">
                  <label htmlFor="pDate">Posting Date</label>
                  <input className="input" type="date" name="pDate" id="pDate" />
                </div>
                <div className="row">
                  <label htmlFor="eDate">Expiry Date</label>
                  <input className="input" type="date" name="eDate" id="eDate" />
                </div>
                <div className="row">
                  <label htmlFor="AppClosingDate">Closing Job</label>
                  <input className="input" type="date" name="AppClosingDate" id="AppClosingDate" />
                </div>
                <div className="row">
                  <label htmlFor="remJobDate">Removing Job</label>
                  <input className="input" type="date" name="remJobDate" id="remJobDate" />
                </div>
              </div>
            </div>
            <div className="sections">
              <div className="side">
                <div className="headTitle">Salary Details</div>
                <div className="row">
                  <label htmlFor="salary">Salary</label>
                  <input type="text" name="salary" id="salary" />
                </div>
                <div className="row">
                  <label htmlFor="hours">Job Hours</label>
                  <input type="text" name="hours" id="hours" />
                </div>
                <div className="row">
                  <label htmlFor="type">Job Type</label>
                  <select className="input" name="type" id="type">
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
            <div className="sections">
              <div className="downside">
                <button type="submit" onClick={previewBtnHandler} className="btn" >Preview</button>
                <button type="submit" className="btn" >Submit</button>
              </div>
            </div>
          </div>
        </form>
        <div className=""></div>
      </ErrorBoundary>
    );
};

export default Form;
