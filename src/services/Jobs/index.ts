import { Job } from '../../components/DataModels/Job';
import FormData from '../../components/DataModels/FormData';

import { REACT_BACKEND_URL } from '../../config';
import axios from 'axios';

interface PostJobProps{
  form:FormData;
}
export const postJob = async ( props: PostJobProps) => {
  const { form } = props;
  try {
    const response = await axios.post(`${REACT_BACKEND_URL}/v1/job`,form);
    return response;
  } catch ( error ) {
    return null;
  }
};
export const  fetchJobs = async () => {
  try {
    const response = await axios.get<Job[]>(`${REACT_BACKEND_URL}/v1/job`);
    return response;
  } catch ( error ) {
    return null;
  }
};

export const fetchJobsByAdmin = async () => {
  try {
    const response = await axios.get<Job[]>(`${REACT_BACKEND_URL}/v1/admin`);
    return response;
  } catch ( error ){
    return null;
  }
};

interface StatusProps{
  id: string;
  status: string;
}
export const setJobStatus = async ( props: StatusProps ) => {
  const { id, status } = props;
  try {
    const response = await axios.put(`${REACT_BACKEND_URL}/v1/admin/${id}`,{status:status});
    return response;
  } catch ( error ) {
    return null;
  }
};