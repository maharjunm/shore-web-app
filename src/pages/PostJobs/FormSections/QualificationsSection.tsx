import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm: (field: string, value: any) => void;
}

const QualificationsSection =  (props: Props) => {

  const [qualification, setQualification] = useState('');
  const [qualifications, setQualifications] = useState([]);
  const [emptyInpurError, setEmptyInputError] = useState(false);
  const inputErrorMessage = '*Required';
  const {updateForm} = props;

  const updateQualification = (e: any)=>{
    setQualification(e.target.value);
  };

  const removeQualification = (id: string)=>{
    const newQualifications=qualifications.filter((qualification)=>qualification.id!=id);
    setQualifications(newQualifications);
    updateForm('qualifications',newQualifications);
  };

  const addQualification = ()=>{
    console.log(qualification);
    if(!qualification.trim()){
      setEmptyInputError(true);
      setTimeout(() => {
        setEmptyInputError(false);
      }, 2000);
      return;
    }
    setQualifications([
      ...qualifications,{id:qualification,value:qualification}
    ]);
    console.log(qualifications);
    updateForm('qualifications',qualifications);
    setQualification('');
  };

  return(
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">
          Extra Qualifications and Skills
          <span className="mandatoryField">*</span>
        </div>
        <ul>
          {
            qualifications.map((qualification)=>(
              <li key={qualification.id}>{qualification.value}
                <span  onClick={()=>removeQualification(qualification.id)}>x</span>
              </li>
            ))
          }
        </ul>
        <div className="row">
          <input
            type="text"
            name="extraqualification"
            onChange={updateQualification}
            onBlur={updateQualification}
            id="qlinput"
            placeholder="EX:BTech CSE"
          />
          <button type="button"  onClick={addQualification} className="addBtn" >Add+</button>
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{emptyInpurError && inputErrorMessage }</span>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default QualificationsSection;
