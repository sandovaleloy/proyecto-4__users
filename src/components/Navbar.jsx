import React from "react";
import "./styles/navbar.css";

const Navbar = ({ handleClickShowModal }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Users</h1>
      <button className="navbar__btn" onClick={handleClickShowModal}>
        <div className="iconBtn_container">
          <i className="bx bx-cross"></i>
          <p>create new user</p>
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
