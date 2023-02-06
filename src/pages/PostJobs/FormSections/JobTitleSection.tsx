import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm:(field:string,value:any)=>void;
  onBlur:(field:string,value:any)=>void;
  errorMessages:any;
}
const JobTitleSection = (props:Props) => {

  const inputErrorMessage = '*Required';
  const {updateForm,onBlur, errorMessages} = props;

  return (
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">Job Details</div>
        <div className="row">
          <label htmlFor="title">Job Title</label>
          <div className="flexdown">
            <input
              type="text"
              name="title"
              onChange={(e)=>updateForm('title',e.target.value)}
              onBlur={(e)=>onBlur('title',e.target.value)}
              required
              id="title"
            />
          </div>
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['title'] && inputErrorMessage }</span>
        </div>
        <div className="row">
          <label htmlFor="qualification">Qualification</label>
          <input
            type="text"
            name="qualification"
            onChange={(e)=>updateForm('qualification',e.target.value)}
            onBlur={(e)=>onBlur('qualification',e.target.value)}
            required
            id="qualification"
          />
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['qualification'] && inputErrorMessage}</span>
        </div>
        <div className="row">
          <label htmlFor="experience">Experience</label>
          <input
            type="text"
            name="experience"
            onChange={(e)=>updateForm('experience',e.target.value)}
            onBlur={(e)=>onBlur('experience',e.target.value)}
            required
            id="experience"
          />
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['experience'] && inputErrorMessage}</span>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default JobTitleSection;
