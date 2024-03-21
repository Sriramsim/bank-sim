import React, { useState } from 'react';
import { Link } from "react-router-dom";
import img from "./bank.jpg";

function Navbar() {
  return (
    <div className="navbar">
<Link to='/'>Home</Link> 
      <Link to='/createaccount'>Create Account</Link> 
    <Link to="/login">LogIn</Link>
   <Link to='/deposit'>Deposit</Link>
      <Link to='/withdraw'>Withdraw</Link>
      <Link to="/alldata">AllData</Link>
    </div>
  );
}

const styles = `
.navbar {
  overflow: hidden;
  background-color: black;
  display: flex;
  justify-content: center;

}

.navbar a {
  color: white;
  text-decoration: none;
  
  font-size: 16px;
}

.navbar a:hover {
  background-color: #aaa;
  color: black;
}
`;

export default Navbar;

// Apply styles to the Navbar component
const styleTag = document.createElement('style');
styleTag.type = 'text/css';
if (styleTag.styleSheet) {
  styleTag.styleSheet.cssText = styles;
} else {
  styleTag.appendChild(document.createTextNode(styles));
}
document.head.appendChild(styleTag);
