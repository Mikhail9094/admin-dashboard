import React, { FC, ReactNode } from "react";
import styles from "./mainLayout.module.scss";
import ButtonIcon from "../ButtonIcon";
import ButtonDashboard from "../ButtonDashboard";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.icons}>
          <ButtonIcon
            addClass="account"
            onClick={() => console.log("account")}
          />
          <ButtonIcon addClass="bell" onClick={() => console.log("bell")} />
          <ButtonIcon addClass="search" onClick={() => console.log("search")} />
          <ButtonIcon
            addClass="message"
            onClick={() => console.log("message")}
          />
        </div>
      </header>
      <nav>
        <div className={styles.logo}>
          <span className={styles.dash}>Dash</span>
          <span className={styles.lite}>Lite</span>
        </div>

        <div className={styles.dashboard}>
          <ButtonDashboard name='Table' onClick={()=>console.log('Table')}/>
        </div>
      </nav>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
