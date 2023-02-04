import  FormData  from '../../components/DataModels/FormData';

const validate=(form:FormData)=>{
  if(   !form.title            ||
        !form.qualification    ||
        !form.experience       ||
        !form.companyName      ||
        !form.companyType      ||
        !form.companyLogo      ||
        !form.city             ||
        !form.state            ||
        !form.country          ||
        !form.region           ||
        !form.postingDate      ||
        !form.expiryDate       ||
        !form.appClosingDate   ||
        !form.removingJobDate  ||
        !form.salary           ||
        !form.hours            ||
        !form.jobType
  ){
    return null;
  }
  return form;

};
export default validate;
