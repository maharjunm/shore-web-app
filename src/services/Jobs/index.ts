import { Job } from '../../components/DataModels/Job';
import FormData from '../../components/DataModels/FormData';

import { REACT_BACKEND_URL } from '../../config';
import axios from 'axios';

interface PostJobProps{
  form:FormData;
  email:string;
}
export const postJob = async ( props: PostJobProps) => {
  const { form, email } = props;
  try {
    const response = await axios.post(`${REACT_BACKEND_URL}/v1/job`,form,{params: {email: email}});
    return response;
  } catch ( error ) {
    return error.response;
  }
};
export const  fetchJobs = async () => {
  try {
    const response = await axios.get<Job[]>(`${REACT_BACKEND_URL}/v1/job/get`,{params: {status: 'Approved'}});
    return response;
  } catch ( error ) {
    console.log(error.response);
    return null;
  }
};
interface AdminStatusProps{
  role: string;
}
export const fetchJobsByAdmin = async ( props: AdminStatusProps) => {
  const { role } = props;
  try {
    const response = await axios.get<Job[]>(`${REACT_BACKEND_URL}/v1/job/get`,{params: {role: role}});
    return response;
  } catch ( error ){
    console.log(error.response);
    return error.response;
  }
};

interface StatusProps{
  id: string;
  status: string;
  role: string;
}
export const setJobStatus = async ( props: StatusProps ) => {
  const { id, status, role } = props;
  try {
    const response = await axios.put(`${REACT_BACKEND_URL}/v1/job/${id}`,{status,role});
    return response;
  } catch ( error ) {
    return error.response;
  }
};
