import React from "react";
import stylesChangePasswordForm from "./ChangePassword.module.css";
import logo from "../../../images/logo.png";

function ChangePassword() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
          <input
            type="text"
            id="login"
            name="login"
            minLength={1}
            // value={nameRU}
            // onChange={onTitleChanged}
            className={stylesChangePasswordForm.input}
            placeholder="Email / Логин"
            required
          />
          <span className={stylesChangePasswordForm.error}>
            Поле должно быть заполнено
          </span>
        </fieldset>

        <fieldset className={stylesChangePasswordForm.field}>
          <input
            type="text"
            id="control"
            name="control"
            minLength={1}
            // value={nameRU}
            // onChange={onTitleChanged}
            className={stylesChangePasswordForm.input}
            placeholder="Контрольная строка"
            required
          />
          <span className={stylesChangePasswordForm.error}>
            Неверное контрольное слово
          </span>
        </fieldset>

        <fieldset className={stylesChangePasswordForm.field}>
          <input
            type="password"
            id="password"
            name="password"
            minLength={6}
            // value={nameRU}
            // onChange={onTitleChanged}
            className={stylesChangePasswordForm.input}
            placeholder="Новый пароль"
            required
          />
          <span className={stylesChangePasswordForm.error}>
            Пароль должен быть не менее 6 символов
          </span>
        </fieldset>

        <fieldset className={stylesChangePasswordForm.field}>
          <input
            type="password"
            id="confirmation"
            name="confirmation"
            minLength={6}
            // value={nameRU}
            // onChange={onTitleChanged}
            className={stylesChangePasswordForm.input}
            placeholder="Подтверждение пароля"
            required
          />
          <span className={stylesChangePasswordForm.error}>
            Пароли не совпадают
          </span>
        </fieldset>

        {/* <button
          type="submit"
          className={canSave?stylesAddPostForm.button:stylesAddPostForm.disabled}
          disabled={!canSave}
          onClick={handleScroll}
        >
          Сохранить отзыв
        </button> */}
      </form>
    </section>
  );
}

export default ChangePassword;
