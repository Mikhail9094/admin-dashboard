import React, { useState } from "react";
import styles from "./app.module.scss";
import Authorization from "./Components/Authorization";
<<<<<<< HEAD
import ReferencesComponents from "./Components/ReferencesComponents/ReferencesComponents.1";
=======
import ReferencesComponents from "./Components/ReferencesComponents/ReferencesComponents";
>>>>>>> 0665629 (fix: code correction)

function App(): React.JSX.Element {
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
