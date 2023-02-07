import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm:(field:string,value:any)=>void;
}

const SalarySection =  (props: Props) => {

  const { updateForm } = props;

  return(
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">Salary Details</div>
        <div className="row">
          <label htmlFor="salary">
            Salary
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="number"
            name="salary"
            onChange={(e)=>updateForm('salary',e.target.value)}
            required
            id="salary"
          />
        </div>
        <div className="row">
          <label htmlFor="hours">
            Job Hours
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="number"
            name="hours"
            onChange={(e)=>updateForm('hours',e.target.value)}
            required
            id="hours"
          />
        </div>
        <div className="row">
          <label htmlFor="jobType">
            Job Type
            <span className="mandatoryField">*</span>
          </label>
          <select
            className="input"
            required
            name="jobType"
            id="jobType"
            onChange={(e)=>updateForm('jobType',e.target.value)}
          >
            <option value="">select</option>
            <option value="Contract">Contract</option>
            <option value="Regular">Full-Time</option>
            <option value="Permanent">Part-Time</option>
            <option value="Permanent">Internship</option>
          </select>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default SalarySection;
