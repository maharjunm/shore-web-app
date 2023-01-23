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
type Salary={
  sal:number;
  hours:number;
  type:string;
}
type Job={
  title:  string;
  qualification:string;
  experience:String;
}
export type JobDet={
  job:Job;
  company:Company;
  location:Location;
  dates:Dates;
  salary:Salary,
  qualifications:string[];
  duties:string[];
}
