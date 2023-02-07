import React from "react";
// import stylesAuthPostForm from "../../components/AuthPostForm/AuthPostForm.module.css";
// import { useAppDispatch, useAppSelector } from "../../utils/hooks";
// import { postAdded } from "../../services/reducers/postsSlice";

export const AuthForm = () => {
  // const [description, setDescription] = useState("");
  // const [nameRU, setNameRU] = useState("");

  // const dispatch = useAppDispatch();

  // const author = useAppSelector((state) =>
  //   state.users.find((user) => user.id === userId)
  // );

  // const onSavePostClick = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   author && setNameRU(author.name);
  //   if (description && nameRU && userId) {
  //     dispatch(postAdded(description, nameRU, userId));
  //   }

  //   setDescription("");
  //   setNameRU("");
  // };

  // const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setNameRU(e.target.value);
  // const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
  //   setDescription(e.target.value);

  // const canSave = Boolean(description) && Boolean(nameRU) && Boolean(userId);

  return (
    <section>
      форма
      {/* <form
        className={stylesAddPostForm.postform}
        onSubmit={onSavePostClick}
        action="#"
        name="addform"
      >
        <label htmlFor="postTitle" className={stylesAddPostForm.postform__item}>
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
        </button>
      </form> */}
    </section>
  );
};
