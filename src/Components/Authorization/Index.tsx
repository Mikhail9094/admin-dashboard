import styles from "./authorization.module.scss";
import React from "react";

const Authorization = () => {
  return (
    <div className={styles.wrapper}>
      <span>Авторизация</span>
      <div className={styles.itemAuthorization}>
        Логин:
        <br />
        <input type="text" name="text" />
        <br />
      </div>
      <div className={styles.itemAuthorization}>
        Пароль:
        <br />
        <input type="password" name="text" />
        <br />
      </div>
      <button>Войти</button>
    </div>
  );
};

export default Authorization;
