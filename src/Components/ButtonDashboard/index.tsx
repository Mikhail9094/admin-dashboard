import React from "react";
import styles from './buttonDashboard.module.scss'

interface Props {
  name: string;
  onClick(): void;
}

const ButtonDashboard = ({ name, onClick }: Props) => {
  return (
    <button className={styles.button} name={name} onClick={onClick}>
      Name
    </button>
  );
};

export default ButtonDashboard;
