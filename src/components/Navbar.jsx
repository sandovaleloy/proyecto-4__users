import React from 'react'
import "./styles/navbar.css"

const Navbar = ({handleClickShowModal}) => {

  return (
    <nav className='navbar'>
        <h1 className='navbar__title'>Users</h1>
        <button className='navbar__btn' onClick={handleClickShowModal}><i className='bx bx-cross'></i>create new user</button>
    </nav>
  )
}

export default Navbar