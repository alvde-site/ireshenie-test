import React, { useState } from "react";
import stylesChangePasswordForm from "./ChangePassword.module.css";
import logo from "../../../images/logo.png";

function ChangePassword() {
  const [values, setValues] = useState({
    login: "",
    control: "",
    password: "",
    confirmation: "",
  });
  const [errors, setErrors] = useState({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  const handleChange = (event: React.FormEvent) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
  };

  // function validate() {
  //   return true;
  // }

  return (
    <section className={stylesChangePasswordForm.auth}>
      <form
        className={stylesChangePasswordForm.form}
        onSubmit={handleSubmit}
        action="#"
        name="changepasswordform"
      >
        <img
          className={stylesChangePasswordForm.logo}
          src={logo}
          alt="Логотип"
        />
        <h1 className={stylesChangePasswordForm.title}>Изменение пароля</h1>
        <fieldset className={stylesChangePasswordForm.field}>
          <label htmlFor="login" className={stylesChangePasswordForm.label}>
            <input
              type="text"
              id="login"
              name="login"
              minLength={1}
              value={values.login || ""}
              onChange={handleChange}
              className={stylesChangePasswordForm.input}
              placeholder="Email / Логин"
              required
            />
          </label>
          <span className={stylesChangePasswordForm.error}>
            Поле должно быть заполнено
          </span>
        </fieldset>

        <fieldset className={stylesChangePasswordForm.field}>
          <label htmlFor="control" className={stylesChangePasswordForm.label}>
            <input
              type="text"
              id="control"
              name="control"
              minLength={1}
              value={values.control || ""}
              onChange={handleChange}
              className={stylesChangePasswordForm.input}
              placeholder="Контрольная строка"
              required
            />
          </label>
          <span className={stylesChangePasswordForm.error}>
            Неверное контрольное слово
          </span>
        </fieldset>

        <fieldset className={stylesChangePasswordForm.field}>
          <label htmlFor="password" className={stylesChangePasswordForm.label}>
            <input
              type="password"
              id="password"
              name="password"
              minLength={6}
              value={values.control || ""}
              onChange={handleChange}
              className={stylesChangePasswordForm.input}
              placeholder="Новый пароль"
              required
            />
          </label>
          <button
            className={stylesChangePasswordForm.showing}
            aria-label="Показать пароль"
          ></button>
          <span className={stylesChangePasswordForm.error}>
            Пароль должен быть не менее 6 символов
          </span>
        </fieldset>

        <fieldset className={stylesChangePasswordForm.field}>
          <label
            htmlFor="confirmation"
            className={stylesChangePasswordForm.label}
          >
            <input
              type="password"
              id="confirmation"
              name="confirmation"
              minLength={6}
              value={values.control || ""}
              onChange={handleChange}
              className={stylesChangePasswordForm.input}
              placeholder="Подтверждение пароля"
              required
            />
          </label>
          <span className={stylesChangePasswordForm.error}>
            Пароли не совпадают
          </span>
        </fieldset>

        <div className={stylesChangePasswordForm.note}>
          <span className={stylesChangePasswordForm.notestar}>*</span>
          <p className={stylesChangePasswordForm.notetext}>Обязательные поля</p>
        </div>
        <input
          type="submit"
          value="Изменить пароль"
          className={stylesChangePasswordForm.submit}
        />
        <ul className={stylesChangePasswordForm.links}>
          <li>
            <a href="!#" className={stylesChangePasswordForm.link}>
              Зарегистироваться
            </a>
          </li>
          <li>
            <a href="!#" className={stylesChangePasswordForm.link}>
              Войти
            </a>
          </li>
        </ul>
      </form>
    </section>
  );
}

export default ChangePassword;
