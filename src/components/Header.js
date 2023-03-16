import React from "react";
import "../styles/header/Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1 className="header-container-heading">Welcome to the scss learning</h1>
        <button>Click here</button>
      </div>
      <h1>Welcome to the scss learning</h1>
      <button>Click here</button>
      <br/>
      <button className="btn-primary">Primary button</button>
      <br/>
      <button className="btn-secondary">Secondary button</button>
    </>
  );
};

export default Header;
