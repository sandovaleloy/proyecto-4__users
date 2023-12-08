import React from 'react'
import UserCard from './UserCard'
import './styles/usersList.css'
const UsersList = ({users, 
  setUpdatingUser, 
  handleClickShowModal,
  deleteUser}) => {

  return (
    <section className='containerList'>
        {users.length > 0 ? (
          users.map(user => <UserCard 
            key={user.id}
            handleClickShowModal={handleClickShowModal}
            setUpdatingUser={setUpdatingUser}
            deleteUser={deleteUser} 
            user={user}/>) 
        ) : (
            <p className="moving-text">No hay users creados</p>
        )
          
        }
    </section>
  )
}

export default UsersList