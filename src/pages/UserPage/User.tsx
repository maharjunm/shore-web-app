import React, { useState } from 'react';
import './User.scss';
import { HistoryJobs, ResetPassword } from './Tabs';

const User=()=>{
  const [tab, setTab] = useState('reset');
  return(
    <div>
      <div className="userDashboard">
        <div className='listItems'>
          <h1>User Options</h1>
          <ul>
            <li 
              className={tab==="history"?'active':''}
              onClick={()=>setTab('history')}
              >History
            </li>
            <li
              className={tab==="reset"?'active':''}
              onClick={()=>setTab('reset')}
            >Reset Password
            </li>
          </ul>
        </div>
        {tab=="history" && <HistoryJobs />}
        {tab=="reset" && <ResetPassword />}
      </div>
    </div>
  );
};
export default User;