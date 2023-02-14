{/*type Company={
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
}*/}

  type Job= {
    title: string;
    description: string;
    experience:string;
    discipline: string;
    type: 'full-time' | 'part-time' | 'contract' | 'internship';
    category: string;
    qualifications: string[];
    duties: string[];
  };
  type Company= {
    name: string;
    companyType: string;
    logo: string | undefined;
  };
  type Location= {
    city: string;
    country: string;
    region: string;
  };
  type Dates= {
    postingDate: Date;
    expiryDate: Date;
    closingDate: Date;
    removingJobDate: Date;
  };
  type Salary= {
    sal: number;
    hours: number;
    salaryType: string;
  };
  


export type JobDet={
  job:Job,
  company:Company,
  location:Location,
  dates:Dates,
  salary:Salary
}
