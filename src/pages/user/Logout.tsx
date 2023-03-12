import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../HomePage/HomePage';
import './auth.scss';

function Logout() {
  const { dispatch } = useContext(UserContext);
  const [ authCookie, setAuthCookie, removeAuthCookie] = useCookies([]);

  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: 'USER', payload: false });
    dispatch({ type: 'ADMIN', payload: false });
    removeAuthCookie('email');
    removeAuthCookie('user');
    history.push('/login');
  };

  return (
    <div className="logoutContainer">
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout} className="logoutButton">Logout</button>
    </div>
  );
}

export default Logout;
