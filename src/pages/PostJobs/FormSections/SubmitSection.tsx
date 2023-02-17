import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from 'components/DataModels/FormData';

interface Props{
  updateForm: (field: string, value: any) => void;
}

const SubmitSection =  (props: Props) => {

  const { updateForm } = props;

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
            id="sub"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="row">
          <label htmlFor="sub">Employer ID</label>
          <input
            type="mail"
            name="employersEmail"
            onChange={(e)=>updateForm('employersEmail',e.target.value)}
            id="sub"
            placeholder="example@gmail.com" />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default SubmitSection;
