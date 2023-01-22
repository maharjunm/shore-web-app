type Company={
  name:string;
  type:string;
  logo:File;
}
type Location={
  city:string;
  state:string;
  country:string;
  region:string;
}
type Dates={
  postingDate:Date;
  expiryDate:Date;
  closingDate:Date;
  removingJobDate:Date;
}
export type Salary={
  sal:number;
  hours:number;
  type:string;
}
export  type Job={
  title:  string;
  qualification:string;
  experience:String;
}
export type JobDet={
  job:Job;
  company:Company;
  location:Location;
  dates:Dates;
  salary:Salary;
}
