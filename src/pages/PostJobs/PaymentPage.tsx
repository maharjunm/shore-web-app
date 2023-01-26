import React from 'react';
import { ErrorBoundary } from '../../components';
import './BillingPage.scss';
const PaymentPage = ()=>{
  return (
    <ErrorBoundary>
      <div className="superSection">
        <div className="sections">
          <div className="upside">
            <div className="headTitle">Post A Job</div>
          </div>
        </div>
        <div className="sections">
          <div className="side">
            <div className="headTitle">Job Details</div>
            <div className="row">
              <label htmlFor="title">Job Title</label>
              <input type="text" name="title" required id="title" />
            </div>
            <div className="row">
              <label htmlFor="qual">Qualification</label>
              <input type="text" name="qual" required id="qual" />
            </div>
            <div className="row">
              <label htmlFor="exp">Experience</label>
              <input type="text" name="exp" required id="exp" />
            </div>
          </div>
          <div className="side">
            <div className="headTitle">Company Details</div>
            <div className="row">
              <label htmlFor="orgName">Company Name</label>
              <input type="text" name="orgName" required id="orgName" />
            </div>
            <div className="row">
              <label htmlFor="orgType">Organization Type</label>
              <input type="text" name="orgType" required id="orgType" />
            </div>
            <div className="row">
              <label htmlFor="orgLogo"> Logo</label>
              <input type="file" className="input" required name="orgLogo" id="orgLogo" />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};
