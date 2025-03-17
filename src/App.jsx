import { useEffect, useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
// import axios from "axios"; // Descomentar si vuelves a usar la API

// const URL_BASE = "https://users-crud.academlo.tech/"; // API

function App() {
  const [users, setUsers] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [updatingUser, setUpdatingUser] = useState();

  // Cargar usuarios desde localStorage al iniciar la app
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
    // getAllUsers(); // Descomentar si vuelves a usar la API
  }, []);

  // Guardar usuarios en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleClickShowModal = () => {
    setIsShowModal((prev) => !prev);
  };

  // Crear usuario en localStorage
  const createUser = (data) => {
    const newUser = { ...data, id: Date.now() }; // ID único
    setUsers([...users, newUser]);
    handleClickShowModal();

    // axios.post(`${URL_BASE}users/`, data)
    //   .then(() => {
    //     getAllUsers();
    //     handleClickShowModal();
    //   })
    //   .catch((err) => console.log(err));
  };

  // Obtener usuarios desde la API (comentado)
  // const getAllUsers = () => {
  //   axios.get(`${URL_BASE}users/`)
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => console.log(err));
  // };

  // Eliminar usuario en localStorage
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);

    // axios.delete(`${URL_BASE}users/${id}/`)
    //   .then(() => getAllUsers())
    //   .catch((err) => console.log(err));
  };

  // Actualizar usuario en localStorage
  const updateUser = (data, id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...data } : user
    );
    setUsers(updatedUsers);
    handleClickShowModal();

    // axios.patch(`${URL_BASE}users/${id}/`, data)
    //   .then(() => {
    //     getAllUsers();
    //     handleClickShowModal();
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Navbar handleClickShowModal={handleClickShowModal} />

      <ModalForm
        handleClickShowModal={handleClickShowModal}
        isShowModal={isShowModal}
        createUser={createUser}
        updatingUser={updatingUser}
        updateUser={updateUser}
        setUpdatingUser={setUpdatingUser}
      />

      <UsersList
        users={users}
        deleteUser={deleteUser}
        setUpdatingUser={setUpdatingUser}
        handleClickShowModal={handleClickShowModal}
      />
    </div>
  );
}

export default App;
