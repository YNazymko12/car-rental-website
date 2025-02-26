import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import css from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <Link className={css.link} to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </>
  );
};

export default Logo;
