import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './auth.scss';
import { REACT_BACKEND_URL } from '../../config';

function Signup() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [ logging, setLogging ] = useState(false);

  const History = useHistory();

  const handleLogging = () =>{
    setLogging(true);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    handleLogging();

    try{
      const res = await fetch(`${REACT_BACKEND_URL}/v1/user/signup`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      if(res.status === 201){
        window.alert('successful SignUp');
        History.push('/profile');
      }
      else if(res.status === 400) setError('user already exisit');
      else setError('Something went wrong');
    }
    catch(error){
      setError(error);
    }
  };

  return (
    <div className="container-auth">
      <form onSubmit={handleSubmit} method="POST">
        <h2>SIGN UP</h2>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
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
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <div className="btn">
          <button type="submit" className={logging?'btnLogging':''}>{logging?'Signing in':'Signup'}</button>
        </div>

        <p>already have an account?{' '}<Link to="/login" className="Link">Login</Link></p>
      </form>
    </div>
  );
}
export default Signup;
