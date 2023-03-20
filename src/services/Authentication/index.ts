import { REACT_BACKEND_URL } from '../../config';
import axios from 'axios';
interface SignUpProps{
  body: {
    username: string;
    email: string;
    password: string;
  }
}

export const signup = async ( props: SignUpProps ) => {
  const { body } = props;
  try {
    const response = await axios.post(`${REACT_BACKEND_URL}/v1/user/signup`,body);
    return response;
  } catch ( error ){
    return error.response;
  }
};

interface LoginProps{
  body: {
    email: string;
    password: string;
  }
}
export const login = async ( props: LoginProps ) => {
  const { body } = props;
  try {
    const response = await axios.post(`${REACT_BACKEND_URL}/v1/user/login`,body);
    return response;
  } catch ( error ){
    return error.response;
  }
};
