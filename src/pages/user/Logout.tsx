import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../HomePage/HomePage';
import { logout } from '../../services/Authentication';
import './auth.scss';

function Logout() {
  const { dispatch } = useContext(UserContext);
  const [ authCookie, setAuthCookie, removeAuthCookie] = useCookies([]);
  const navigate = useNavigate();

  const handleLogout = async  () => {
    await logout();
    dispatch({ type: 'USER', payload: false });
    dispatch({ type: 'ADMIN', payload: false });
    removeAuthCookie('isAdmin');
    removeAuthCookie('SESSION');
    navigate('/login');
  };

  return (
    <div className="logout-auth">
      <div className="logoutContainer">
        <p>Are you sure you want to log out?</p>
        <button onClick={handleLogout} className="logoutButton">Logout</button>
      </div>
    </div>
  );
}

export default Logout;
