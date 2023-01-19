import React from 'react';
import './JobFeed.scss';
import {JobDetailsType} from './../../components';
interface Props {
    jobd:JobDetailsType;
    jobClick:(currentJob:string)=>void;
}
const JobFeed = (det: Props) => {
    let p=det.jobd;
    return (
        <div className="jobFeed">
            <div className="title">
                <h4 onClick={()=> det.jobClick(p.role)}>{p.role}</h4>
                <span className="company"> {p.companyName}</span>
                <span className="company"> {p.place}</span>
            </div>
            <div className="shift">
                <span> &#8377; {p.salary}</span>
                <span>{p.experience}</span>
                <span> shift</span>
            </div>
            <div className="downshift">
                <span>Easily apply</span>
                <span>Hiring multiple candidate</span>
            </div>
            <ul>
                <li>
                    Software design and development in a test-driven
                    environment.
                </li>
                <li>
                    Knowledge of coding languages (e.g. PHP, Java, JavaScript).
                </li>
            </ul>
            <div className="foot">
                <p>
                    Hiring ongoing: From{' '}
                    <b>
                        {p.role} in {p.place}
                    </b>
                </p>
            </div>
        </div>
    );
};
export default JobFeed;
