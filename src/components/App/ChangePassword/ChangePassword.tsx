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
        <img className={stylesChangePasswordForm.form__logo} src={logo} alt="Логотип"/>
        {/* <label htmlFor="postTitle" className={stylesAddPostForm.postform__item}>
          Заголовок отзыва:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          minLength={2}
          maxLength={30}
          value={nameRU}
          onChange={onTitleChanged}
          className={stylesAddPostForm.item}
        />
        <label htmlFor="postContent" className={stylesAddPostForm.item}>
          Описание:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={description}
          onChange={onContentChanged}
          className={stylesAddPostForm.description}
        />
        <button
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
};

export default ChangePassword;
