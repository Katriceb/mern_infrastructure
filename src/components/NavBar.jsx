import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-service'

function NavBar(props) {
  // Add in functionality to log out
  function handleLogOut () {
    // Delegate to users-service
    userService.logOut();
    // update state will also cause a re-render
    props.setUser(null);
  }

  return (
    <nav>
        <Link to='/orders'>Resource History</Link>
        &nbsp; | &nbsp;
        <Link to='/orders/new'>New Resource</Link>
        &nbsp; | &nbsp;
        <span>Welcome Safen Haven's, {props.user.name}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}

export default NavBar