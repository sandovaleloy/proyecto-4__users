import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/modalForm.css";

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
};

const ModalForm = ({
  isShowModal,
  handleClickShowModal,
  createUser,
  updatingUser,
  updateUser,
  setUpdatingUser,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    if (updatingUser) {
      updateUser(data, updatingUser.id);
    } else {
      createUser(data);
    }
    reset(defaultValues);
  };

  const handleClickClose = () => {
    handleClickShowModal();
    reset(defaultValues);
    setUpdatingUser();
  };

  useEffect(() => {
    if (updatingUser) {
      reset(updatingUser);
    }
  }, [updatingUser]);

  return (
    <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
      <div className="containerForm">
        <form onSubmit={handleSubmit(submit)} className="modalForm__form">
          <h3 className="modalForm__title">
            {updatingUser ? "Edit User" : "New User"}
          </h3>
          <i onClick={handleClickClose} className="modalForm__x bx bx-x"></i>
          <div className="modalForm__div1">
            <i className="bx bx-user"></i>
            <input
              className="modalForm__input-one"
              type="text"
              {...register("first_name")}
              placeholder="Example:  julia"
              autoComplete="name"
            />
            <input
              className="modalForm__input-one"
              type="text"
              {...register("last_name")}
              placeholder="Example:  conor"
              autoComplete="family-name"
            />
          </div>
          <div className="modalForm__div">
            <i className="bx bx-envelope"></i>
            <input
              className="modalForm__input"
              type="email"
              {...register("email")}
              placeholder="Example:  juConor@gmaill.com"
              autoComplete="email"
            />
          </div>
          <div className="modalForm__div">
            <i className="bx bx-shield"></i>
            <input
              className="modalForm__input"
              type="password"
              {...register("password")}
              placeholder="********"
              autoComplete="current-password"
            />
          </div>
          <div className="modalForm__div">
            <i className="bx bx-calendar"></i>
            <input
              className="modalForm__input"
              type="date"
              {...register("birthday")}
              autoComplete="bday"
            />
          </div>
          <button className="modalForm__btn">
            {updatingUser ? <p>Save change</p> : <p>Add new user</p>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ModalForm;
