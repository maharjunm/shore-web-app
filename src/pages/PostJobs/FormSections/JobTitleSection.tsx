import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';
import {Multiselect} from 'multiselect-react-dropdown';
interface Props{
  updateForm:(field:string,value:any)=>void;
}
const JobTitleSection = (props:Props) => {
  const { updateForm } = props;
  const [option, setOption] = useState(['Life Sciences', 'Physics', 'Biomedicine','Health Sciences','Engineering','Chemistry','Computer Science','Applied Science','Nanotechnology','Earth Sciences','Environmental','Sciences','Veterinary','Fisheries','Agriculture','Forestry']);
  const updateDiscip=(field: string,value: any)=>{
    if(value.length>0){
      updateForm(field,value);
    }
  };
  return (
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">Job Details</div>
        <div className="row">
          <label htmlFor="title">
          Job Title
            <span className="mandatoryField">*</span>
          </label>
          <select
            className="input"
            required
            name="title"
            id="title"
            onChange={(e)=>updateForm('title',e.target.value)}
          >
            <option value="">select</option>
            <option value="Academic Dean/Dept. Head">Academic Dean/Dept. Head</option>
            <option value="Faculty">Faculty</option>
            <option value="Group Leader/Principal Invesigator">Group Leader/Principal Invesigator</option>
            <option value="Lab Manager">Lab Manager</option>
            <option value="Lecturer/Senior Lecturer">Lecturer/Senior Lecturer</option>
            <option value="Manager">Manager</option>
            <option value="Medical Doctor">Medical Doctor</option>
            <option value="PhD Fellowship">PhD Fellowship</option>
            <option value="PhD Studentship">PhD Studentship</option>
            <option value="Postdoc Fellowship">Postdoc Fellowship</option>
            <option value="President/CEO/Director/VP">President/CEO/Director/VP</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Research Scientist">Research Scientist</option>
            <option value="Senior Scientist">Senior Scientist</option>
            <option value="Staff Scientist">Staff Scientist</option>
            <option value="Student Fellowship">Student Fellowship</option>
            <option value="Technician">Technician</option>
          </select>
        
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
        <div className="row">
          <label htmlFor="title">
          Discipline
            <span className="mandatoryField">*</span>
          </label>
          <Multiselect className='multi' onSelect={(e)=>updateDiscip('discipline',e)} 
            isObject={false}
            options={option}
            selectedValues={['Sciences']}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default JobTitleSection;
