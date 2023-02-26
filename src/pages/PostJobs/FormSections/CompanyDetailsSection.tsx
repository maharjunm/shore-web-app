import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import  FormData  from '../../../components/DataModels/FormData';

interface Props{
  updateForm: (field: string, value: any) => void;
}

const CompanyDetailsSection =  (props: Props) => {

  const { updateForm } = props;
  const setLogo = (file: File) => {
    if(!file){
      updateForm('Logo',null);
      return;
    }
    updateForm('Logo',file);
  };

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
            onChange={(e)=>updateForm('company.name',e.target.value)}
            required
            id="companyName"
          />
        </div>
        <div className="row">
          <label htmlFor="companyType">
            Organization Type
            <span className="mandatoryField">*</span>
          </label>
          <input
            type="text"
            name="companyType"
            onChange={(e)=>updateForm('company.companyType',e.target.value)}
            required
            id="companyType"
          />
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
            name="companyLogo"
            onChange={(e)=>setLogo(e.target.files[0])}
            required
            id="companyLogo" />
        </div>
        <div className="messageBox">
          <span className="logotype"><i>(only  jpg, png, jpeg)</i></span>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default CompanyDetailsSection;
