import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faSpinner  } from '@fortawesome/free-solid-svg-icons';
import './Loading.scss';
const Loading  = ( )=> {
  return (
    <div className='loader'>
      <FA icon={faSpinner} />
    </div>
  );
};

export default Loading;