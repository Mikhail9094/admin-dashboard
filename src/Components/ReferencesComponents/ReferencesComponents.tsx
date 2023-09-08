import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout";
import ItemsPage from "../Table/pages/ItemsPage";
import { useState } from "react";
import Authorization from "../Authorization";
import styles from './styles.module.scss'

const ReferencesComponents = () => {

    return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<div> Раздел не выбран </div>} />
          <Route path="/table" element={<ItemsPage />} />
        </Route>
      </Routes>
    );
  };
  
  export default ReferencesComponents;