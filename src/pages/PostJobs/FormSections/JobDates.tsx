import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';
interface Props{
  updateForm: (field: string, value: any) => void;
  hostingTime: Date;
}

const JobDates =  (props: Props) => {

  const { updateForm, hostingTime } = props;
  const updateDates = (date: any) =>{
    updateForm('dates.closingDate',date);
    updateForm('dates.postingDate',new Date().toISOString().split('T')[0]);
    updateForm('dates.expiryDate',new Date().toISOString().split('T')[0]);
  };
  return(
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">Dates</div>
        <div className="row">
          <label htmlFor="postingDate">
            Posting Date
            <span className="mandatoryField">*</span>
          </label>
          <input
            className="input"
            readOnly
            value={new Date().toISOString().split('T')[0]}
            type="date"
            required
            name="postingDate"
            id="postingDate"
          />
        </div>
        <div className="row">
          <label htmlFor="jobExpiriesOn">
            Job Expires
            <span className="mandatoryField">*</span>
          </label>
          <input
            className="input"
            readOnly
            value={new Date().toISOString().split('T')[0]}
            type="date"
            required
            name="jobExpiriesOn"
            id="jobExpiriesOn"
          />
        </div>
        <div className="row">
          <label htmlFor="appClosingDate">
            Application Deadline
            <span className="mandatoryField">*</span>
          </label>
          <input
            className="input"
            min={new Date().toISOString().split('T')[0]}
            max={new Date('9999-12-30').toISOString().split('T')[0]}
            type="date"
            required
            name="appClosingDate"
            onChange={(e)=>updateDates(e.target.value)}
            id="appClosingDate"
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default JobDates;
