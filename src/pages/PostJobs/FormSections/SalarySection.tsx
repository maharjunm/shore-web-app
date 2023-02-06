import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm:(field:string,value:any)=>void;
  onBlur:(field:string,value:any)=>void;
  errorMessages:any;
}

const SalarySection =  (props: Props) => {

  const inputErrorMessage = '*Required';
  const {updateForm,onBlur, errorMessages} = props;

  return(
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default SalarySection;
