import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm: (field: string, value: any) => void;
  onBlur: (field: string, value: any) => void;
  errorMessages: any;
}

const CompanyDetailsSection =  (props: Props) => {

  const inputErrorMessage = '*Required';
  const {updateForm,onBlur, errorMessages} = props;

  return(
    <ErrorBoundary>
      <div className="side">
        <div className="headTitle">Company Details</div>
        <div className="row">
          <label htmlFor="companyName">
            Company Name
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            onChange={(e)=>updateForm('companyName',e.target.value)}
            onBlur={(e)=>onBlur('companyName',e.target.value)}
            required
            id="companyName"
          />
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['companyName'] && inputErrorMessage}</span>
        </div>
        <div className="row">
          <label htmlFor="companyType">
            Organization Type
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="text"
            name="companyType"
            onChange={(e)=>updateForm('companyType',e.target.value)}
            onBlur={(e)=>onBlur('companyType',e.target.value)}
            required
            id="companyType"
          />
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['companyType'] && inputErrorMessage}</span>
        </div>
        <div className="row">
          <label htmlFor="companyLogo">
            Logo
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="file"
            accept=".jpg,.png,.jpeg,"
            className="input"
            name="compnayLogo"
            onChange={(e)=>updateForm('companyLogo',e.target.files)}
            onBlur={(e)=>onBlur('companyLogo',e.target.files)}
            required
            id="compnayLogo" />
        </div>
        <div className="messageBox">
          <span className="logotype"><i>(only  jpg, png, jpeg)</i></span>
        </div>
        <div className="ErrorBox">
          <span className="inputErrorMesg">{errorMessages['companyLogo'] && inputErrorMessage}</span>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default CompanyDetailsSection;
