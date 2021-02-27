import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/mb-icon3.png";

const Navbar = ({ sticky1 }) => {
return (
  <nav className={sticky1 ? "mynavbar mynavbar-sticky" : "mynavbar"}>
    <div className="mynavbar--logo-holder">
      {sticky1 ? <img src={Logo} alt="logo" className="navbar--logo-sticky" /> : <img src={Logo} alt="logo" className="navbar--logo" />}
    </div>
    <ul className="navbar--link">
      {sticky1 ? <li className="navbar--link-item-sticky">HOME</li> : <li className="navbar--link-item">HOME</li>}
      {sticky1 ? <li className="navbar--link-item-sticky">PORTFOLIO</li> : <li className="navbar--link-item">PORTFOLIO</li>}
      {sticky1 ? <li className="navbar--link-item-sticky">SKILLS</li> : <li className="navbar--link-item">SKILLS</li>}
      {sticky1 ? <li className="navbar--link-item-sticky">CONTACT</li> : <li className="navbar--link-item">CONTACT</li>}
    </ul>
  </nav>
)};
export default Navbar;
