import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import Navbar from './components/Navbar'
import UsersList from './components/UsersList'

const URL_BASE = "https://users-crud.academlo.tech/"

function App() {

  const [users, setUsers] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const [updatingUser, setUpdatingUser] = useState()

  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal)
  }

  const createUser = (data) => {
    axios.post(`${URL_BASE}users/`, data)
      .then(() => {
        getAllUsers()
        handleClickShowModal()
      })
      .catch((err) => console.log(err))
  }
 
  const getAllUsers = () => {
    axios.get(`${URL_BASE}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios.delete(`${URL_BASE}users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const updateUser = (data, id) => {
    axios.patch(`${URL_BASE}users/${id}/`, data)
      .then(() => {
        getAllUsers()
        handleClickShowModal()
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  

  return (
    <div className="App">

      <Navbar 
      handleClickShowModal={handleClickShowModal}/>

      <ModalForm 
      handleClickShowModal={handleClickShowModal} 
      isShowModal={isShowModal} 
      createUser={createUser}
      updatingUser={updatingUser}
      updateUser={updateUser}
      setUpdatingUser={setUpdatingUser}/>

      <UsersList 
      users={users} 
      deleteUser={deleteUser} 
      setUpdatingUser={setUpdatingUser} 
      handleClickShowModal={handleClickShowModal}/>

    </div>
  )
}

export default App
