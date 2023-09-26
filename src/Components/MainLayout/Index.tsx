import ButtonIcon from "../ButtonIcon";
import ButtonDashboard from "../ButtonDashboard";
import { Outlet } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import styles from "./mainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.icons}>
          <ButtonIcon addClass="account" onClick={() => console.log("account")} />
          <ButtonIcon addClass="bell" onClick={() => console.log("bell")} />
          <ButtonIcon addClass="search" onClick={() => console.log("search")} />
          <ButtonIcon addClass="message" onClick={() => console.log("message")} />
        </div>
      </header>

      <main>
        <div className={styles.calendar}>
          <Calendar />
        </div>
        <Outlet />
      </main>
      <nav>
        <div className={styles.logo}>
          <span className={styles.dash}>Dash</span>
          <span>Lite</span>
          <span className={styles.lite}>Lite</span>
        </div>
        <div className={styles.dashboard}>
          <ButtonDashboard nameButton="Account" to="/table" />
        </div>
      </nav>

      <footer>2023</footer>
    </div>
  );
};

export default MainLayout;