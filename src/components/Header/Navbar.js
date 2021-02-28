import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/mb-icon3.png";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = ({ sticky1 }) => {
return (
  <nav className={sticky1 ? "mynavbar mynavbar-sticky" : "mynavbar"}>
    <div className="mynavbar--logo-holder">
      {sticky1 ? <AnchorLink href='#root'><img src={Logo} alt="logo" className="navbar--logo-sticky" /></AnchorLink> : <AnchorLink href='#root'><img src={Logo} alt="logo" className="navbar--logo" /></AnchorLink>}
    </div>
    <ul className="navbar--link">
      {sticky1 ? <li className="navbar--link-item-sticky"><AnchorLink href='#root'>HOME</AnchorLink></li> : <li className="navbar--link-item"><AnchorLink href='#root'>HOME</AnchorLink></li>}
      {sticky1 ? <li className="navbar--link-item-sticky"><AnchorLink href='#portfolioFS'>PORTFOLIO</AnchorLink></li> : <li className="navbar--link-item"><AnchorLink href='#portfolioFS'>PORTFOLIO</AnchorLink></li>}
      {sticky1 ? <li className="navbar--link-item-sticky"><AnchorLink href='#skills'>SKILLS</AnchorLink></li> : <li className="navbar--link-item"><AnchorLink href='#skills'>SKILLS</AnchorLink></li>}
      {sticky1 ? <li className="navbar--link-item-sticky"><AnchorLink href='#contact'>CONTACT</AnchorLink></li> : <li className="navbar--link-item"><AnchorLink href='#contact'>CONTACT</AnchorLink></li>}
    </ul>
  </nav>
)};
export default Navbar;
