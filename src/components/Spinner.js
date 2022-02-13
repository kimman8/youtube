import React from 'react';
import spinner from '../img/spinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='loading'
    />
  );
};

export default Spinner;
