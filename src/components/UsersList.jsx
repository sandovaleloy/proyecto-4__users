import React from "react";
import UserCard from "./UserCard";
import "./styles/usersList.css";
const UsersList = ({
  users,
  setUpdatingUser,
  handleClickShowModal,
  deleteUser,
}) => {
  return (
    <section className="users-list">
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard
            key={user.id}
            handleClickShowModal={handleClickShowModal}
            setUpdatingUser={setUpdatingUser}
            deleteUser={deleteUser}
            user={user}
          />
        ))
      ) : (
        <p className="moving-text">THERE ARE NO USERS CREATED</p>
      )}
    </section>
  );
};

export default UsersList;
