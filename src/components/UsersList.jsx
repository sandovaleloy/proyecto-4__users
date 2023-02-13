import React from 'react'
import UserCard from './UserCard'
import './styles/usersList.css'
const UsersList = ({users, 
  setUpdatingUser, 
  handleClickShowModal,
  deleteUser}) => {

  return (
    <section className='containerList'>
        {
          users.map(user => <UserCard 
            key={user.id}
            handleClickShowModal={handleClickShowModal}
            setUpdatingUser={setUpdatingUser}
            deleteUser={deleteUser} 
            user={user}/>) 
        }
    </section>
  )
}

export default UsersList