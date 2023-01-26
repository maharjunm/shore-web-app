import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
interface Props{
  props:{
    fname:string,
    position:string,
    orgName:string,
    street:string,
    state:string,
    country:string,
    pscode:number,
    email:string,
    pno:number,
  },
  check:boolean,
}
const SubPage=(det:Props)=>{
  const require=det.check?'readOnly':'';
  return (
    <ErrorBoundary>
      <div className="side" >
        <div className="row">
          <label htmlFor="fname">Full Name</label>
          <input type="text" name="fname" readOnly={det.check} placeholder={det.check?det.props.fname:''}  required id="fname" />
        </div>
        <div className="row">
          <label htmlFor="pos">Position</label>
          <input type="text" name="pos" readOnly={det.check} placeholder={det.check?det.props.position:''} required id="pos" />
        </div>
        <div className="row">
          <label htmlFor="orgName">Organization Name</label>
          <input type="text" name="orgName" readOnly={det.check}  placeholder={det.check?det.props.orgName:''} required id="orgName" />
        </div>
        <div className="row">
          <label htmlFor="street">Street and Avenue</label>
          <input type="text" name="street"  readOnly={det.check} placeholder={det.check?det.props.street:''} required id="street" />
        </div>
        <div className="row">
          <label htmlFor="state">State</label>
          <select className="input"  required name="state" id="state">
            <option value="">select</option>
            <option value="india">Telangana</option>
            <option value="us">Kerela</option>
            <option value="canada">TamilNadu</option>
            <option value="england">Maharastra</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="country">Country</label>
          <select className="input" required name="country" id="country">
            <option value="">select</option>
            <option value="india">India</option>
            <option value="us">US</option>
            <option value="canada">Canada</option>
            <option value="england">England</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="pscode">Postal Code</label>
          <input type="number" name="pscode" readOnly={det.check} placeholder={det.check?det.props.pscode.toString():''} required id="pscode" />
        </div>
        <div className="row">
          <label htmlFor="email">Email</label>
          <input type="mail" name="email" readOnly={det.check} placeholder={det.check?det.props.email:''} required id="email" />
        </div>
        <div className="row">
          <label htmlFor="pno">Phone Number</label>
          <input type="number" name="pno" readOnly={det.check} placeholder={det.check?det.props.pno.toString():''} required id="pno" />
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default SubPage;
