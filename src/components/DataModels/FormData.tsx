interface FormData{
  qualifications:{
    id:string;
    value:string;
  }[];
  duties:{
    id:string;
    value:string;
  }[];
  title:string;
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
};
export default FormData;
