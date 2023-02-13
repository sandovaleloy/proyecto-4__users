import React from "react";
import './styles/userCard.css'

const UserCard = ({user, 
  deleteUser, 
  setUpdatingUser, 
  handleClickShowModal}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }
 
  return (
    <article className="cardContainer">
      <h3 className="cardContainer__title">
        {user.first_name} {user.last_name}
      </h3>
      <hr className="cardContainer__hr"/>
      <u className="cardContainer__type">
        <li className="cardContainer__list">
          <span className="cardContainer__span">email</span>
          <span className="cardContainer__span2">{user.email}</span>
        </li>
        <li className="cardContainer__list">
          <span className="cardContainer__span">birthday</span>
          <i className="cardContainer__detalle bx bx-gift"></i>
          <span className="cardContainer__span2"> {user.birthday}</span>
        </li>
      </u>
      <hr className="cardContainer__hr" />
      <footer className="cardContainer__footer">
        <button className="cardContainer__btn-edit" onClick={handleClickEdit}>
          <i className="cardContainer__icon2 bx bx-pencil"></i>
        </button>
        <button className="cardContainer__btn-delete" onClick={() => deleteUser(user.id)}>
          <i className="cardContainer__icon1 bx bx-trash"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
