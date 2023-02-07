import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm: (field: string, value: any) => void;
}

const JobDates =  (props: Props) => {

  const { updateForm } = props;

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
            min={new Date().toISOString().split('T')[0]}
            max={new Date('9999-12-30').toISOString().split('T')[0]}
            type="date" required
            name="postingDate"
            onChange={(e)=>updateForm('postingDate',e.target.value)}
            id="postingDate"
          />
        </div>
        <div className="row">
          <label htmlFor="expiryDate">
            Expiry Date
            <span className="mandatoryField">*</span>
          </label>
          <input
            className="input"
            min={new Date().toISOString().split('T')[0]}
            max={new Date('9999-12-30').toISOString().split('T')[0]}
            type="date"
            required
            name="expiryDate"
            onChange={(e)=>updateForm('expiryDate',e.target.value)}
            id="expiryDate"
          />
        </div>
        <div className="row">
          <label htmlFor="appClosingDate">
            Closing Job
            <span className="mandatoryField">*</span>
          </label>
          <input
            className="input"
            min={new Date().toISOString().split('T')[0]}
            max={new Date('9999-12-30').toISOString().split('T')[0]}
            type="date"
            required
            name="appClosingDate"
            onChange={(e)=>updateForm('appClosingDate',e.target.value)}
            id="appClosingDate"
          />
        </div>
        <div className="row">
          <label htmlFor="removingJobDate">
            Removing Job
            <span className="mandatoryField">*</span>
          </label>
          <input
            className="input"
            min={new Date().toISOString().split('T')[0]}
            max={new Date('9999-12-30').toISOString().split('T')[0]}
            type="date"
            required
            name="removingJobDate"
            onChange={(e)=>updateForm('removingJobDate',e.target.value)}
            id="removingJobDate"
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default JobDates;
