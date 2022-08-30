import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.jpg';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to={'/'} className="logo">
      <img src={logo} alt="logo" title="logo" />
    </Link>
  );
};

export default Logo;
