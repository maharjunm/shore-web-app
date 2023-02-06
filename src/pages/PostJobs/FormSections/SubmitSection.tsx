import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm: (field: string, value: any) => void;
  onBlur: (field: string, value: any) => void;
  errorMessages: any;
}

const SubmitSection =  (props: Props) => {

  const inputErrorMessage = '*Required';
  const {updateForm,onBlur, errorMessages} = props;

  return(
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">How to Submit Apply via</div>
        <div className="font-small">
          <label htmlFor="mail">By Email</label>
          <input type="checkbox" name="sub" id="mail" />
          <label htmlFor="emp">Employer’s ID</label>
          <input type="checkbox" name="sub" id="emp" />
        </div>
        <div className="row">
          <label htmlFor="sub">Email ID</label>
          <input
            type="mail"
            name="submisionEmail"
            onChange={(e)=>updateForm('submisionEmail',e.target.value)}
            onBlur={(e)=>onBlur('submisionEmail',e.target.value)}
            id="sub"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['submisionEmail'] && inputErrorMessage}</span>
        </div>
        <div className="row">
          <label htmlFor="sub">Employer ID</label>
          <input
            type="mail"
            name="employersEmail"
            onChange={(e)=>updateForm('employersEmail',e.target.value)}
            onBlur={(e)=>onBlur('employersEmail',e.target.value)}
            id="sub"
            placeholder="example@gmail.com" />
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['employersEmail'] && inputErrorMessage}</span>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default SubmitSection;
