import React,{useState} from 'react';
import { ErrorBoundary } from '../../components';
import axios from 'axios';
import './ContactUs.scss';
import { REACT_BACKEND_URL } from '../../config';
const ContactUs = ( ) => {
  const [formStatus,setFormStatus]= useState('Submit');
  const [formData,setFormData]= useState({email:'',companyName:'',name:'',query:''});
  const onSubmit= async (e:any)=>{
    e.preventDefault();
    setFormStatus('submitting');
    const response = await await axios.post(REACT_BACKEND_URL+'v1/contact',formData).then(response =>{
      console.log(response);
      setFormStatus('Submitted');
    }).catch(e =>{
      console.log(e);
      setFormStatus('Error!');
    });

    console.log(formData);
  };
  const handleChange=(e:any)=>{
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [e.target.name]:e.target.value
      };
    });
  };
  return (
    <ErrorBoundary>
      <div className="contactContainer">
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
              <input type="email" name="email"  value={formData.email} onChange={handleChange} placeholder="Email"/>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name"/>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange}  placeholder="Company Name"/>
              <input type="text" name="query" value={formData.query} onChange={handleChange} placeholder="Query"/><br/>
              <button type="submit" className={formStatus}> {formStatus}</button>
            </form>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ContactUs;
