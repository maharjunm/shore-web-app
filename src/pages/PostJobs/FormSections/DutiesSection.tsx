import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';

interface Props{
  updateForm: (field: string, value: any) => void;
}

const DutiesSection =  (props: Props) => {

  const [duties, setDuties]= useState([]);
  const [duty, setDuty]=useState('');
  const [emptyInpurError, setEmptyInputError] = useState(false);
  const inputErrorMessage = '*Required';
  const {updateForm} = props;

  const updateDuty = (e:any)=>{
    setDuty(e.target.value);
  };

  const removeDuty = (id:string)=>{
    setDuties((updatedDuties)=>{
      const newDuties=duties.filter((duty)=>duty.id!=id);
      updateForm('duties',newDuties);
      return newDuties;
    });
  };

  const addDuty = ()=>{
    if(!duty.trim()){
      setEmptyInputError(true);
      setTimeout(() => {
        setEmptyInputError(false);
      }, 2000);
      return;
    }
    setDuties((updateDuties)=>{
      const tempDuties=[
        ...duties,{id:duties.length,value:duty}
      ];
      updateForm('duties',tempDuties);
      return tempDuties;
    });setDuty('');
    
    
  };

  return(
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">
          Full Job Description
          <span className="mandatoryField">*</span>
        </div>
        <ul>
          {
            duties.map((duty)=>(
              <li key={duty.id}>{duty.value}
                <span onClick={()=>removeDuty(duty.id)} className="mandatoryField" >x</span>
              </li>
            ))
          }
        </ul>
        <div className="row flexrow">
          <textarea className='textArea' rows={5} cols={60} name="extraDuty"  onChange={updateDuty} id="rrinput"
            placeholder="University/Company details, About Location, About Position, Minimum Qualification, Idea Qualification, Job Responsibilities, How to submit Job application, Compensation and benifits." >
          </textarea>
          <button type="button"  onClick={addDuty} className="addBtn" >Add+</button>
        </div>
        <div className="row">

        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{emptyInpurError && inputErrorMessage }</span>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DutiesSection;
