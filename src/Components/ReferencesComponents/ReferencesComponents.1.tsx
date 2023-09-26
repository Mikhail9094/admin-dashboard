import { Route, Routes } from "react-router-dom";
import ItemsPage from "../Table/pages/ItemsPage";
import MainLayout from "../MainLayout";


const ReferencesComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<div> Раздел не выбран </div>} />
        <Route path="/table" element={<ItemsPage />} />
      </Route>
    </Routes>
  );
};
export default ReferencesComponents;
