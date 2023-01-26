import React,{useState} from 'react';
import { ErrorBoundary } from '../../../components';
import {Redirect} from 'react-router-dom';
import './BillingPage.scss';
import SubPage from './SubPage';

const BillingPage = ()=>{
  const [checkBox,setCheckBox]= useState(false);
  const [details,setDetails]= useState({
    fname:'huhu',
    position:'vhj',
    orgName:'gyuikjh',
    street:'fyuik',
    state:'gtyui',
    country:'ertyu',
    pscode:7655,
    email:'Example@gmail.com',
    pno:770209158,
  });
  const checkBoxHandler =()=>{
    if(checkBox){
      setCheckBox(false);
      return;
    }
    setCheckBox(true);
  };
  const formHandler=(e:any)=>{
    return <Redirect  to="/form/" />;
  };
  return(
    <ErrorBoundary>
      <form className="billingForm" >
        *<div className="superSection">
          <div className="sections">
            <div className="side">
              <div className="headTitle">Billing Details</div>
            </div>
            <SubPage props={details} check={false}/>
          </div>
          <div className="sections">
            <div className="side">
              <div className="headTitle">Ordered By:</div>
              <div className="font-checkox">
                <label htmlFor="mail">Same as Above Mentioned Details    </label>
                <input type="checkbox" checked={checkBox} onChange={checkBoxHandler} name="sub" id="mail" />
              </div>
            </div>
            <SubPage props={details} check={checkBox}/>
          </div>
        </div>
        <div className="sections">
          <div className="downside">
            <button type="submit" className="btnstyle" >Back</button>
            <button type="submit" onClick={formHandler} className="btnstyle" >Next</button>
          </div>
        </div>
      </form>
    </ErrorBoundary>
  );
};

export default BillingPage;
