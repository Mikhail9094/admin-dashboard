import React, { Children, useState } from "react";
import styles from "./app.module.scss";
import Authorization from "./Components/Authorization";
import MainLayout from "./Components/MainLayout";
import Calendar from "./Components/Calendar";

function App() {
  const [authorization, setAuthorization] = useState(true);
  return !authorization ? (
    <div className={styles.authorization}>
      <Authorization />
    </div>
  ) : (
    <div className={styles.app}>
      <MainLayout>
        <Calendar />
      </MainLayout>
    </div>
  );
}

export default App;
