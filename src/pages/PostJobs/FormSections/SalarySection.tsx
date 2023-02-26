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
        <div className="row">
          <label htmlFor="jobType">
            Discipline
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
            <option value="Contract">Life Sciences</option>
            <option value="Regular">Physics</option>
            <option value="Permanent">Biomedicine</option>
            <option value="Permanent">Health Sciences</option>
            <option value="Contract">Engineerin</option>
            <option value="Regular">Chemistry</option>
            <option value="Permanent">Computer Science</option>
            <option value="Permanent">Applied Sciences</option>
            <option value="Contract">Nanotechnology</option>
            <option value="Regular">Earth Sciences</option>
            <option value="Permanent">Environmental</option>
            <option value="Permanent">Sciences</option>
            <option value="Contract">Veterinary</option>
            <option value="Regular">Fisheries</option>
            <option value="Permanent">Agriculture</option>
            <option value="Permanent">Forestry</option>
          </select>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default SalarySection;
