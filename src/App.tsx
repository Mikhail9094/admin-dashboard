import React, { useState } from "react";
import styles from "./app.module.scss";
import Authorization from "./Components/Authorization";
import ReferencesComponents from "./Components/ReferencesComponents/ReferencesComponents.1";

function App() {
  const [authorization, setAuthorization] = useState(true);

  return !authorization ? (
    <div className={styles.authorization}>
      <Authorization />
    </div>
  ) : (
    <div className={styles.app}>
      <ReferencesComponents />
    </div>
  );
}

export default App;
