import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm: (field: string, value: any) => void;
  onBlur: (field: string, value: any) => void;
  errorMessages: any;
}

const JobDates =  (props: Props) => {

  const inputErrorMessage = '*Required';
  const {updateForm,onBlur, errorMessages} = props;

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
            onBlur={(e)=>onBlur('postingDate',e.target.value)}
            id="postingDate"
          />
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['postingDate'] && inputErrorMessage}</span>
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
            onBlur={(e)=>onBlur('expiryDate',e.target.value)}
            id="expiryDate"
          />
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['expiryDate'] && inputErrorMessage}</span>
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
            onBlur={(e)=>onBlur('appClosingDate',e.target.value)}
            id="appClosingDate"
          />
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['appClosingDate'] && inputErrorMessage}</span>
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
            onBlur={(e)=>onBlur('removingJobDate',e.target.value)}
            id="removingJobDate"
          />
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['removingJobDate'] && inputErrorMessage}</span>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default JobDates;
