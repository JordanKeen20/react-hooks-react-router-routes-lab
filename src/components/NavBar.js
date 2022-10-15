import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  color : 'blue'
}

function NavBar() {
  return (
    <div className = 'navbar'>
      <div>
        <li>
          <NavLink 
          to = '/home'
          exact
          style = {linkStyles}
          activeStyle={{ 
          color: 'purple' 
          }}
          > 
          Home 
          </NavLink>
        </li>
      </div>
      <div>
        <li>
          <NavLink 
          to = '/actors'
          exact
          style = {linkStyles}
          activeStyle={{ color: 'purple'}}
          > 
          Actors 
          </NavLink>
        </li>
      </div>
      <div>
        <li>
          <NavLink 
          to = '/directors'
          exact
          style = {linkStyles}
          activeStyle={{ color: 'purple' }}
          > 
          Directors 
          </NavLink>
        </li>
      </div>
      <div>
        <li>
          <NavLink 
          to = '/movies'
          exact
          style = {linkStyles}
          activeStyle={{ color: 'purple' }}
          > 
          Movies
          </NavLink>
        </li>
      </div>
    </div>
  );
}

export default NavBar;
