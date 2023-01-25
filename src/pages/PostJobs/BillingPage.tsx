import React from 'react';
import { ErrorBoundary } from '../../components';
import './BillingPage.scss';
interface Props{
  billingType:string;
}

const BillingPage = (props:Props)=>{
  return(
    <ErrorBoundary>
      <div className="billingForm">
        <div className="superSection">
          <div className="sections">
            <div className="side">
              <div className="headTitle">Billing Details</div>
              <div className="row">
                <label htmlFor="fname">Full Name</label>
                <input type="text" name="fname" required id="fname" />
               </div>
              <div className="row">
                <label htmlFor="pos">Position</label>
                <input type="text" name="pos" required id="pos" />
              </div>
              <div className="row">
                <label htmlFor="orgName">Organization Name</label>
                <input type="text" name="orgName" required id="orgName" />
              </div>
              <div className="row">
                <label htmlFor="street">Street and Avenue</label>
                <input type="text" name="street" required id="street" />
              </div>
              <div className="row">
                <label htmlFor="state">State</label>
                <select className="input" required name="state" id="state">
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
                <input type="number" name="pscode" required id="pscode" />
              </div>
              <div className="row">
                <label htmlFor="email">Email</label>
                <input type="mail" name="email" required id="email" />
              </div>
              <div className="row">
                <label htmlFor="pno">Phone Number</label>
                <input type="number" name="pno" required id="pno" />
              </div>
            </div>
          </div>
          <div className="sections">
            <div className="side">
              <div className="headTitle">Ordered By:</div>
              <div className="font-small">
                <label htmlFor="mail">Same as Above Mentioned Details    </label>
                <input type="checkbox" name="sub" id="mail" />
              </div>
              <div className="row">
                <label htmlFor="fname">Full Name</label>
                <input type="text" name="fname" required id="fname" />
               </div>
              <div className="row">
                <label htmlFor="pos">Position</label>
                <input type="text" name="pos" required id="pos" />
              </div>
              <div className="row">
                <label htmlFor="orgName">Organization Name</label>
                <input type="text" name="orgName" required id="orgName" />
              </div>
              <div className="row">
                <label htmlFor="street">Street and Avenue</label>
                <input type="text" name="street" required id="street" />
              </div>
              <div className="row">
                <label htmlFor="state">State</label>
                <select className="input" required name="state" id="state">
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
                <input type="number" name="pscode" required id="pscode" />
              </div>
              <div className="row">
                <label htmlFor="email">Email</label>
                <input type="mail" name="email" required id="email" />
              </div>
              <div className="row">
                <label htmlFor="pno">Phone Number</label>
                <input type="number" name="pno" required id="pno" />
              </div>
            </div>
          </div>
        </div>
        <div className="sections">
          <div className="downside">
            <button type="submit" className="btnstyle" >Back</button>
            <button type="submit" className="btnstyle" >Next</button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default BillingPage;
