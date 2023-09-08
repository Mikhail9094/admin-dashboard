import React from "react";
import styles from "./buttonIcon.module.scss";

interface Props {
  addClass: string;
  onClick(): void;
}

const ButtonIcon = ({ addClass, onClick }: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[addClass]}`}
      onClick={onClick}
    />
  );
};

export default ButtonIcon;
