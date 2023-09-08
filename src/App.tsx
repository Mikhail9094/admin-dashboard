import React, { Children, useState } from "react";
import styles from "./app.module.scss";
import Authorization from "./Components/Authorization";
import MainLayout from "./Components/MainLayout";
import Form from "./Components/Form/Form";
import ItemsPage from "./Components/Table/pages/ItemsPage";
import ReferencesComponents from "./Components/ReferencesComponents/ReferencesComponents";

function App() {
  const [authorization, setAuthorization] = useState(true);

  return !authorization ? (
    <div className={styles.authorization}>
      <Authorization />
    </div>
  ) : (
    <div className={styles.app}>
      <ReferencesComponents />
      {/* <MainLayout>
        <Form />
        <ItemsPage/>
      </MainLayout> */}
    </div>
  );
}

export default App;
