import React from 'react';
import { NavLink} from 'react-router-dom';


const Header = () => (
    <header className="header">
      <div className="alignment">
        <h1 className="text">Expensify</h1>
        <NavLink className="dashButton" activeClassName="is-active" exact={true} to="/">dashboard</NavLink>
        <NavLink className="dashButton" activeClassName="is-active" to="/Create">Create Expense</NavLink>
        <NavLink className="dashButton" activeClassName="is-active" to="/edit">Edit Expense</NavLink>
        <NavLink className="dashButton" activeClassName="is-active" to="/help">Help</NavLink>
      </div>
    </header>
  );

export default Header;
  