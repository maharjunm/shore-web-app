import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm: (field: string, value: any) => void;
  onBlur: (field: string, value: any) => void;
  errorMessages: any;
}

const CompanyLocationSection =  (props: Props) => {

  const inputErrorMessage = '*Required';
  const {updateForm,onBlur, errorMessages} = props;

  return(
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">Company Location Details</div>
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
    </ErrorBoundary>
  );
};

export default CompanyLocationSection;
