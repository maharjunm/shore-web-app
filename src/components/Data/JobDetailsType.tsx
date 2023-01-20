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
