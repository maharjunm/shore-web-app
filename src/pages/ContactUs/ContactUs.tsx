import React,{useState} from 'react';

import { ErrorBoundary } from '../../components';
import './ContactUs.scss';
interface Details{
  mail :String,
  name:String,
  companyName:String,
  query:String,

}
const ContactUs = () => {
    const [formStatus,setFormStatus]= useState("Submit");
    const [formDetails,setDetails]= useState();
    const onSubmit=(e:any)=>{
      e.preventDefault();
      setFormStatus("submitting")
    }
    return (
      <ErrorBoundary>
      <div className="contactContainer">
        <h1>Contact Us</h1>
        <div className="infobox">
        US ,Canada & South America 9:00 AM - 5:30 PM ,EST Phone :202-312-6375 E-mail:service@shorebirdie.org<br/>
        International 9:00 AM - 5:30 PM GMT Phone :+44(0) 1223 326 528 E-mail:service@shorebirdie.org
        </div>
        <div className="contentBox">
          <div className="writeup">
            Our team speaks English, German, French, Spanish, Italian, Swedish, Arabic and Chineese and will respond to your query  within 24 hours.
          </div>
          <div>
            <form onSubmit={onSubmit} action='#' >
              <input type="email" name="email"  placeholder="Email"/>
              <input type="text" name="name" placeholder="Full Name"/>
              <input type="text" name="companyname" placeholder="Company Name"/>
              <input type="text" name="query" placeholder="Query"/><br/>
              <button type="submit" className={formStatus}> {formStatus}</button>

            </form>
          </div>

        </div>
      </div>
      </ErrorBoundary>
    );
};

export default ContactUs;
