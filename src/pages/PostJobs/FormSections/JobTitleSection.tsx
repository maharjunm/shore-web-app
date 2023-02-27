import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

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
              onChange={(e)=>updateForm('job.title',e.target.value)}
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
            onChange={(e)=>updateForm('job.qualification',e.target.value)}
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
            onChange={(e)=>updateForm('job.experience',e.target.value)}
            required
            id="experience"
          />
        </div>
        <div className="row">
          <label htmlFor="discipline">
            Discipline
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="text"
            name="discipline"
            onChange={(e)=>updateForm('job.discipline',e.target.value)}
            placeholder="EX:Software or Marketing"
            required
            id="discipline"
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
            onChange={(e)=>updateForm('job.type',e.target.value)}
          >
            <option value="">select</option>
            <option value="Contract">Contract</option>
            <option value="Full-time">Full-Time</option>
            <option value="Part-time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default JobTitleSection;
