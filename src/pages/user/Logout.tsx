import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../HomePage/HomePage';

const Logout = () => {
  const History = useHistory();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    fetch('/logout', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        dispatch({ type: 'USER', payload: false });
        History.push('/login', { replace: true });
        if (res.status != 200) {
          const error = new Error();
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <h1>Myprofile</h1>;
};
export default Logout;
