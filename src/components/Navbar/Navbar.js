import React from 'react'
import { useAuthState  } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import {signOut } from 'firebase/auth';

function Navbar() {
  const [user] = useAuthState(auth);
  
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div>
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
   <li> <Link to={'/home'}>Home</Link></li>
   <li> <Link to={'/appointment'}>Appointment</Link></li>
   <li> <Link to={'/home'}>Reveiw</Link></li>
   <li> <Link to={'/home'}>Dashbaord</Link></li>
   <li> <Link to={'/home'}>contact</Link></li>
   <li>{user ?<button onClick={handleSignout}>logout</button> :<Link to={'/login'}>Login</Link>}</li>
    </ul>
  </div>
  
</div>
    </div>
  )
}

export default Navbar