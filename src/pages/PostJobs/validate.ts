import  FormData  from '../../components/DataModels/FormData';

const validate=(form:FormData)=>{
  const mandatoryFields = [
    'title', 'qualification', 'experience', 'companyName', 'companyType', 'companyLogo', 'city', 'state', 'country',
    'region', 'postingDate', 'expiryDate', 'appClosingDate', 'removingJobDate', 'salary', 'hours', 'jobType'
  ];
  const isValid = mandatoryFields.reduce((acc,field) => { return  acc && !form[field]; },true);
  if(form.qualifications.length===0){
    return null;
  }
  return isValid ? null: form;

};

export default validate;
