import React from "react";
import "./styles/navbar.css";

const Navbar = ({ handleClickShowModal }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Users</h1>
      <button className="navbar__btn" onClick={handleClickShowModal}>
        <div className="iconBtn_container">
          <p>New user</p>
          <i className="bx bxs-user-plus"></i>
          {/* <i className="bx bx-cross"></i> */}
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
