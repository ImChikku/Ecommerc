import React from 'react'
import "./Navbar.css"
import { Link, Outlet } from 'react-router-dom';
export const Navbar = () => {
    return (
      <>
        <div className="nav">
          <div className="nav-left">
            <img src="images/Logo.svg" alt="logo" />
          </div>
          <div className="nav-right">
            <Link className="btn nav-log" to="/login">
              Login
            </Link>
            <Link className="btn nav-reg" to="/register">
              Register
            </Link>
          </div>
        </div>
        <Outlet/>
      </>
    );
}