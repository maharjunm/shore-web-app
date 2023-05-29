import React from 'react';
import { ErrorBoundary } from '../../../components';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faDollarSign, faRupeeSign, faPoundSign } from '@fortawesome/free-solid-svg-icons';

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
          <div className="minrow">
            <input
              type="text"
              className='minInput-30'
              name="currency"
              onChange={(e)=>updateForm('salary.currency',e.target.value)}
              placeholder='USD'
              required
              id="salary"
            />
            <input
              type="number"
              className='minInput-70'
              name="salary"
              onChange={(e)=>updateForm('salary.sal',e.target.value)}
              required
              id="salary"
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="hours">
            Job Hours
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="number"
            name="hours"
            onChange={(e)=>updateForm('salary.hours',e.target.value)}
            required
            id="hours"
          />
        </div>
        <div className="row">
          <label htmlFor="salaryType">
            Salary type
            <span className="mandatoryField">*</span>
          </label>
          <select
            className="input"
            required
            name="salaryType"
            id="jobType"
            onChange={(e)=>updateForm('salary.companyType',e.target.value)}
          >
            <option value="">select</option>
            <option value="Annual">Annual</option>
            <option value="Regular">Regular</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
          </select>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default SalarySection;
