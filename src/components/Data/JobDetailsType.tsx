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
}
export default JobDetailsType;
