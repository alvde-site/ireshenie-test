import React, { useState } from "react";
import stylesChangePasswordForm from "./ChangePassword.module.css";
import logo from "../../../images/logo.png";
import { useFormWithValidation } from "../../../utils/formValidator";
import { IErrors, IFormValidator } from "../../../utils/interfaces";
import {
  loginError,
  controlError,
  passwordError,
  passwordConfirmationError,
} from "../../../utils/constants";

function ChangePassword() {
  const [type, setType] = useState("password");
  const {
    values,
    handleChange,
    errors,
    setErrors,
    isValid,
    setIsValid,
    resetForm,
  }: IFormValidator = useFormWithValidation();

  function validate() {
    let errorsMessages: IErrors = {};
    let isCorrect = true;
    if (!values["login"]) {
      errorsMessages["login"] = loginError;
      isCorrect = false;
    }
    if (values["control"] !== "abc") {
      errorsMessages["control"] = controlError;
      isCorrect = false;
    }
    if (!values["password"]) {
      errorsMessages["password"] = passwordError;
      isCorrect = false;
    } else if (values["password"] && values["password"].length < 6) {
      errorsMessages["password"] = passwordError;
      isCorrect = false;
    }
    if (values["password"] !== values["confirmation"]) {
      errorsMessages["confirmation"] = passwordConfirmationError;
      isCorrect = false;
    }
    setErrors(errorsMessages);
    setIsValid(isCorrect);
    return isCorrect;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      resetForm();
      alert("Пароль успешно изменен");
    }
  }

  function handleInputChange(e: React.ChangeEvent) {
    handleChange(e);
  }

  function handleShowPassword() {
    type === "password" ? setType("text") : setType("password");
  }

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
              value={values["login"] || ""}
              onChange={handleInputChange}
              className={stylesChangePasswordForm.input}
              placeholder="Email / Логин"
            />
          </label>
          <span
            className={`${stylesChangePasswordForm.error} ${
              isValid && stylesChangePasswordForm.error_hidden
            }`}
          >
            {errors.login}
          </span>
        </fieldset>
        <fieldset className={stylesChangePasswordForm.field}>
          <label htmlFor="control" className={stylesChangePasswordForm.label}>
            <input
              type="text"
              id="control"
              name="control"
              value={values["control"] || ""}
              onChange={handleInputChange}
              className={stylesChangePasswordForm.input}
              placeholder="Контрольная строка"
            />
          </label>
          <span
            className={`${stylesChangePasswordForm.error} ${
              isValid && stylesChangePasswordForm.error_hidden
            }`}
          >
            {errors.control}
          </span>
        </fieldset>

        <fieldset className={stylesChangePasswordForm.field}>
          <label htmlFor="password" className={stylesChangePasswordForm.label}>
            <input
              type={type}
              id="password"
              name="password"
              value={values["password"] || ""}
              onChange={handleInputChange}
              className={stylesChangePasswordForm.input}
              placeholder="Новый пароль"
            />
          </label>
          <button
            type="button"
            className={stylesChangePasswordForm.showing}
            aria-label="Показать пароль"
            onClick={handleShowPassword}
          ></button>
          <span
            className={`${stylesChangePasswordForm.error} ${
              isValid && stylesChangePasswordForm.error_hidden
            }`}
          >
            {errors.password}
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
              value={values["confirmation"] || ""}
              onChange={handleInputChange}
              className={stylesChangePasswordForm.input}
              placeholder="Подтверждение пароля"
            />
          </label>
          <span
            className={`${stylesChangePasswordForm.error} ${
              isValid && stylesChangePasswordForm.error_hidden
            }`}
          >
            {errors.confirmation}
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
