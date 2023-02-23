import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../HomePage/HomePage';
import { REACT_BACKEND_URL } from '../../config';

const Logout = () => {
  const History = useHistory();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    fetch(`${REACT_BACKEND_URL}/v1/user/logout`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        dispatch({ type: 'USER', payload: false });
        History.push('/', { replace: true });
        if (res.status != 200) {
          const error = new Error();
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <h1>Logging Out .....</h1>;
};
export default Logout;
