import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './auth.scss';
import { UserContext } from '../HomePage/HomePage';

function Login() {
  const { state, dispatch } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const History = useHistory();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try{
      const res = await fetch('http://localhost:3000/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if(res.status === 404) setError('user not found');
      else if(res.status === 400) setError('given password is wrong');
      else if(res.status === 500) setError('something went wrong');
      else{
        dispatch({ type: 'USER', payload: true });
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
          <button type="submit">Login</button>
        </div>

        <p>Dont have an account?{' '}<Link to="/signup" className="Link">Sign up</Link></p>
      </form>
    </div>
  );
}
export default Login;
