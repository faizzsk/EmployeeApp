import React from "react";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav justify-content-center">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Employee Master
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="btn btn-outline-light" exact to="/Forms/HomePage">
               <HomeIcon></HomeIcon>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-outline-light" exact to="/contact">
                <PhoneIcon></PhoneIcon><MailIcon></MailIcon>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="btn btn-outline-light" exact to="/about">
                About
              </NavLink>
            </li>
           */}
            <Link className="btn btn-outline-light" to="/CRUD/AddEmployee"><PersonAddIcon></PersonAddIcon></Link>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;