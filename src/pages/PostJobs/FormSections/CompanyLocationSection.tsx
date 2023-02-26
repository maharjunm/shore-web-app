import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm: (field: string, value: any) => void;
}

const CompanyLocationSection =  (props: Props) => {

  const { updateForm } = props;

  return(
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">Company Location Details</div>
        <div className="row">
          <label htmlFor="city">
            City
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="text"
            name="city"
            onChange={(e)=>updateForm('location.city',e.target.value)}
            required
            id="city"
          />
        </div>
        <div className="row">
          <label htmlFor="state">
            State
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="text"
            name="state"
            onChange={(e)=>updateForm('location.state',e.target.value)}
            required
            id="state"
          />
        </div>
        <div className="row">
          <label htmlFor="country">
            Country
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="text"
            name="country"
            onChange={(e)=>updateForm('location.country',e.target.value)}
            required
            id="country"
          />
        </div>
        <div className="row">
          <label htmlFor="region">
            Region
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="text"
            name="region"
            onChange={(e)=>updateForm('location.region',e.target.value)}
            required
            id="region"
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default CompanyLocationSection;
