import { Job } from '../../components/DataModels/Job';
import FormData from '../../components/DataModels/FormData';

import { REACT_BACKEND_URL } from '../../config';
import axios from 'axios';
const instance = axios.create({
  withCredentials: true,
});

interface PostJobProps{
  form:FormData;
}

export const postJob = async ( props: PostJobProps) => {
  const { form } = props;
  try {
    const response = await instance.post(`${REACT_BACKEND_URL}/v1/job`,form);
    return response;
  } catch ( error ) {
    return error.response;
  }
};
export const fetchJobs = async (page: Number) => {
  try {
    const response = await axios.get<Job[]>(`${REACT_BACKEND_URL}/v1/job?page=${page}`);
    return response;
  } catch ( error ) {
    return null;
  }
};

export const fetchJobsByAdmin = async (page: Number) => {
  try {
    const response = await axios.get<Job[]>(`${REACT_BACKEND_URL}/v1/admin?page=${page}`);
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
    const response = await instance.put(`${REACT_BACKEND_URL}/v1/admin/${id}`,{status:status});
    return response;
  } catch ( error ) {
    return null;
  }
};
interface userProps{
  userMailId:String;
}
export const getJobByUser= async()=>{
  try {
    const response=await instance.get<Job[]>(`${REACT_BACKEND_URL}/v1/job/user`);
    return response;

  }catch(error){
    return error;
  }
};
