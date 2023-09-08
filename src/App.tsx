import React, { Children, useState } from "react";
import styles from "./app.module.scss";
import Authorization from "./Components/Authorization";
import MainLayout from "./Components/MainLayout";


function App() {
  const [authorization, setAuthorization] = useState(true);
  const [value, setValue] = useState(new Date())

  return !authorization ? (
    <div className={styles.authorization}>
      <Authorization />
    </div>
  ) : (
    <div className={styles.app}>
      <MainLayout>
        <div>Привет</div>
      </MainLayout>
    </div>
  );
}

export default App;
