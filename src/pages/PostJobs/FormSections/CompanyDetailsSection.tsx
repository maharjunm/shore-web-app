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
      updateForm('companyLogo',null);
      return;
    }
    updateForm('companyLogo',file);
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
            onChange={(e)=>updateForm('companyName',e.target.value)}
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
            onChange={(e)=>updateForm('companyType',e.target.value)}
            required
            id="companyType"
          />
        </div>
        <div className="row">
          <label htmlFor="companyType">
          Organization Type
            <span className="mandatoryField">*</span>
          </label>
          <select
            className="input"
            required
            name="companyType"
            id="companyType"
            onChange={(e)=>updateForm('companyType',e.target.value)}
          >
            <option value="">select</option>
            <option value="Academia">Academia</option>
            <option value="Industry">Industry</option>
            <option value="Government">Government</option>
            <option value="Healthcare/Hospital">Healthcare/Hospital</option>
            <option value="Non-Profit">Non-Profit</option>
            <option value="Media/Communications">Media/Communications</option>
          </select>
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
            onChange={(e)=>setLogo(e.target.files[0])}
            required
            id="compnayLogo" />
        </div>
        <div className="messageBox">
          <span className="logotype"><i>(only  jpg, png, jpeg)</i></span>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default CompanyDetailsSection;
