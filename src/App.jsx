import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import Monsters from "./pages/Monsters";
import MonsterDetails from "./pages/MonsterDetails";
import Layout from "./layouts/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="monsters" element={<Monsters />} />
          <Route path="monsters/:id" element={<MonsterDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
