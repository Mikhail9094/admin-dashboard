import React from "react";
import styles from "./mainWrapper.module.scss";

const MainWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div>Header</div>
      <div>Nav</div>
      <div>body</div>
      <div>footer</div>
    </div>
  );
};

export default MainWrapper