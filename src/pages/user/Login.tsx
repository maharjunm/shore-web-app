import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './auth.scss';
import { UserContext } from '../HomePage/HomePage';
import { REACT_BACKEND_ROUTE } from '../../config';
import axios from 'axios';

function Login() {
  const { state, dispatch } = useContext(UserContext);
  const [ logging, setLogging ] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const History = useHistory();
  const handleLogging = () => {
    setLogging(true);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    handleLogging();

    try{
      const body={
        email:email,
        password:password
      };
      const res = await axios.post(`${REACT_BACKEND_ROUTE}v1/user/login`,body);

      console.log(res.data);
      if(res.status === 404) setError('user not found');
      else if(res.status === 400) setError('given password is wrong');
      else if(res.status === 500) setError('something went wrong');
      else{
        if(res.data.username=== 'ADMIN'){
          dispatch({ type: 'ADMIN', payload: res.data.username === 'ADMIN'});
        }
        else{
          dispatch({ type: 'USER', payload: true});
       
        }
        window.alert('successfull');
        History.push('/');
      }
    }catch(error){
      setError(error);
    }

  };

  return (
    <div className="container-auth">
      <form onSubmit={handleSubmit} method="POST">
        <h2>LOGIN</h2>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="error">{error}</div>}
        <div className="btn">
          <button type="submit" className={logging?'btnLogging':''}>{logging?'Logging in':'Login'}</button>
        </div>

        <p>Dont have an account?{' '}<Link to="/signup" className="Link">Sign up</Link></p>
      </form>
    </div>
  );
}
export default Login;
