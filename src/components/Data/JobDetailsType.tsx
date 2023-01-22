class Company{
  name:string;
  type:string;
  logo:File;
  Company(name:string,type:string,logo:File){
    this.name=name;
    this.type=type;
    this.logo=logo;
  }
}
class Location{
  city:string;
  state:string;
  country:string;
  region:string;
  Location(city:string,state:string,country:string,region:string){
    this.city=city;
    this.state=state;
    this.country=country;
    this.region=region;
  }
}
class Dates{
  postingDate:Date;
  expiryDate:Date;
  closingDate:Date;
  removingJobDate:Date;
  Dates(postingDate:Date,expiryDate:Date,closingDate:Date,removingJobDate:Date){
    this.postingDate=postingDate;
    this.expiryDate=expiryDate;
    this.closingDate=closingDate;
    this.removingJobDate=removingJobDate;
  }
}
class Salary{
  salary:string;
  hours:number;
  type:string;
  Salary(salary:string,hours:number,type:string){
    this.salary=salary;
    this.hours=hours;
    this.type=type;
  }
}
class Job{
  title:  string;
  qualification:string;
  experience:number;  
}
class JobDetailsType{
  role:string;
  companyName: string;
  place: string;
  salary: string;
  experience: string;
  constructor(role:string,cmn:string,place:string,salary:string,experience:string){
    this.role=role;
    this.companyName=cmn;
    this.place=place;
    this.salary=salary;
    this.experience=experience;
  }
  setJob(jb:JobDetailsType){
    this.role=jb.role;
    this.companyName=jb.companyName;
    this.place=jb.place;
    this.salary=jb.salary;
    this.experience=jb.experience;
  }
}
export default JobDetailsType;
