import  FormData  from '../../components/DataModels/FormData';

const validate=(form:FormData)=>{
  const mandatoryFields = [
    'title', 'qualification', 'experience', 'companyName', 'companyType', 'companyLogo', 'city', 'state', 'country',
    'region', 'postingDate', 'expiryDate', 'appClosingDate', 'removingJobDate', 'salary', 'hours', 'jobType',
    'qualifications', 'duties'
  ];
  const  isValid = mandatoryFields.reduce((acc,field) => { return  acc && !(!form[field]); },true);
  return isValid ? form: null;

};

export default validate;
