import  {JobDet}  from '../../components/DataModels/JobDet';
function isDateEmpty(date: Date): boolean {
  return !date || isNaN(date.valueOf());
}
const Validate=(jobView:JobDet)=>{
  const {title,qualification,experience}= jobView.job;
  const {name,type,logo}= jobView.company;
  const {city,state,country,region}= jobView.location;
  const {postingDate,expiryDate,closingDate,removingJobDate}= jobView.dates;
  const salary=jobView.salary;
  const qualifications =jobView.qualifications;
  const duties= jobView.duties;


  if(title.trim()==='' || qualification.trim()==='' || experience.trim()===''){
    return false;
  }
  if(name.trim()==='' || type.trim()==='' || !logo){
    return false;
  }
  if(city.trim()==='' || state.trim()==='' || country.trim()==='' || region.trim()===''){
    return false;
  }
  if( isDateEmpty(postingDate) || isDateEmpty(expiryDate) || isDateEmpty(closingDate) || isDateEmpty(removingJobDate)){
    return false;
  }
  if(!salary.sal || !salary.hours || salary.type.trim()===''){
    return false;
  }
  if(qualifications.length===0){
    return false;
  }
  if(duties.length===0){
    return false;
  }
  return true;

};
export default Validate;
