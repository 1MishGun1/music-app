import { Routes, Route } from "react-router-dom";
import { LayOut } from "../components/LayOut/LayOut";
import { HomePage } from "../pages/HomePage/HomePage";
import { AddNewMusic } from "../pages/AddMusicPage/AddNewMusic";
import { ListMusicPage } from "../pages/ListMusicPage/ListMusicPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
        <Route path="/add" element={<AddNewMusic />} />
        <Route path="/list" element={<ListMusicPage />} />
      </Route>
    </Routes>
  );
};
