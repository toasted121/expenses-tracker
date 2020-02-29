import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='header'>
    <div className='content-container'>
      <div className='header__content'>
        <Link className='header__title' to='/'>
          <h1>Expensify</h1>
        </Link>
        <Link to="/help" className='button button--link'>Help</Link>
      </div>
    </div>
  </header>
);

export default Header;

//<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
//<NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>