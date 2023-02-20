/*interface FormData{
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
};*/
interface FormData{
    job: {
    title: string;
    experience: string;
    discipline: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    qualification: string;
  };
  company: {
    name: string;
    companyType: string;
    logo: string;
  };
  location: {
    city: string;
    country: string;
    state:string;
    region: string;
  };
  dates: {
    postingDate: Date;
    expiryDate: Date;
    closingDate: Date;
    removingDate: Date;
  };
  salary: {
    sal: number;
    hours: number;
    companyType: 'Annual' |'Regular'|'Monthly'|'Quarterly';
  };
  qualifications: {value:string , id:string}[];
  duties: {value:string , id:string}[];
  contact:{
    email:string;
    employeeEmail:string;
  }

}
export default FormData;
