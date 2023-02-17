import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from 'components/DataModels/FormData';

interface Props{
  updateForm:(field:string,value:any)=>void;
}
const JobTitleSection = (props:Props) => {

  const { updateForm } = props;

  return (
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">Job Details</div>
        <div className="row">
          <label htmlFor="title">
            Job Title
            <span className="mandatoryField">*</span>
          </label>
          <div className="flexdown">
            <input
              type="text"
              name="title"
              onChange={(e)=>updateForm('title',e.target.value)}
              required
              id="title"
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="qualification">
            Qualification
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="text"
            name="qualification"
            onChange={(e)=>updateForm('qualification',e.target.value)}
            required
            id="qualification"
          />
        </div>
        <div className="row">
          <label htmlFor="experience">
            Experience
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="text"
            name="experience"
            onChange={(e)=>updateForm('experience',e.target.value)}
            required
            id="experience"
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default JobTitleSection;
