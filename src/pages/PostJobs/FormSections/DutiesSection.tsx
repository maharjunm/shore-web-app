import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm: (field: string, value: any) => void;
}

const DutiesSection =  (props: Props) => {

  const [duties, setDuties]= useState([]);
  const [duty, setDuty]=useState('');
  const inputErrorMessage = '*Required';
  const {updateForm} = props;

  const updateDuty = (e:any)=>{
    setDuty(e.target.value);
  };

  const removeDuty = (id:string)=>{
    const newDuties=duties.filter((duty)=>duty.id!=id);
    setDuties(newDuties);
    updateForm('duties',newDuties);
  };

  const addDuty = ()=>{
    if(!duty.trim()){
      return;
    }
    setDuties([
      ...duties,{id:duty,value:duty}
    ]);
    updateForm('duties',duties);
    setDuty('');
  };

  return(
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">Job Dudies</div>
        <ul>
          {
            duties.map((duty)=>(
              <li key={duty.id}>{duty.value}
                <span onClick={()=>removeDuty(duty.id)}>x</span>
              </li>
            ))
          }
        </ul>
        <div className="row">
          <input type="text" name="extraDuty"  onChange={updateDuty} id="rrinput" placeholder="EX:FrontEnd Developer" />
          <button type="button"  onClick={addDuty} className="addBtn" >Add+</button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DutiesSection;
