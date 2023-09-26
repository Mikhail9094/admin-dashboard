import React from "react";
import styles from './buttonDashboard.module.scss'
import { useNavigate } from "react-router-dom";

interface Props {
  nameButton: string;
  to: string;
}

const ButtonDashboard = ({ nameButton, to }: Props) => {
  const navigate = useNavigate();
  
  return (
    <button className={styles.button} onClick={() => navigate(to)}>
      {nameButton}
    </button>
  );
};

export default ButtonDashboard;
