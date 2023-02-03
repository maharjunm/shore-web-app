import  {JobDet}  from '../../components/DataModels/JobDet';
interface IForm{
  qualifications:{id:string,value:string}[];
  duties:{id:string,value:string}[];
  title:string
  qualification:string;
  experience:string;
  companyName:string;
  companyType:string;
  companyLogo:File;
  city:string;
  state:string;
  country:string;
  region:string;
  postingDate:Date;
  expiryDate:Date;
  appClosingDate:Date;
  removingJobDate:Date;
  salary:number;
  hours:number;
  jobType:string;
}

function isDateEmpty(date: Date): boolean {
  return !date || isNaN(date.valueOf());
}

const validate=(form:IForm)=>{
  let jobView:JobDet;
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

  jobView={
    job:{
      title:form.title,
      qualification:form.qualification,
      experience:form.experience,
    },
    company:{
      name:form.companyName,
      type:form.companyType,
      logo:form.companyLogo,
    },
    location:{
      city:form.city,
      state:form.state,
      country:form.country,
      region:form.region,
    },
    dates:{
      postingDate:new Date(form.postingDate),
      expiryDate:new Date(form.expiryDate),
      closingDate:new Date(form.appClosingDate),
      removingJobDate:new Date(form.removingJobDate),
    },
    salary:{
      sal:form.salary,
      hours:form.hours,
      type:form.jobType,
    },
    qualifications:form.qualifications.map((qualification)=>{return qualification.value;}),
    duties:form.duties.map((duty)=>{return duty.value;}),
  };
  return jobView;

};
export default validate;
