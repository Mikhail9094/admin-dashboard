import React, { FC, ReactNode } from "react";
import styles from "./mainLayout.module.scss";

interface Props {
  children: ReactNode;
}

const MainLayout = ({children}:Props) => {
  return (
    <div className={styles.wrapper}>
      <header>Header</header>
      <nav>
        <div className={styles.logo}>
          <span className={styles.dash}>Dash</span>
          <span>Lite</span>
        </div>

        <div>Dashboard</div>
      </nav>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
