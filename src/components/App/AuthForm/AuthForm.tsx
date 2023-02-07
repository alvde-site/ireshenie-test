import React from "react";
import stylesAuthForm from "./AuthForm.module.css";

export const AuthForm = () => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section className={stylesAuthForm.auth}>
      <form
        className={stylesAuthForm.form}
        onSubmit={handleSubmit}
        action="#"
        name="authform"
      >
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
