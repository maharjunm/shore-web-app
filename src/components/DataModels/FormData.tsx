interface FormData{
  _id:string;
    job: {
    title: string;
    experience: string;
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
    closingDate: Date;
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
  };
  discipline:string[];
  status : 'Approved' | 'Rejected' | 'Pending' ;
  createdBy:string;

}
export default FormData;
