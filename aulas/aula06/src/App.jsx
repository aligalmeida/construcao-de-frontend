import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erro404 from "./Componentes/Erro404";
import Login from "./Componentes/Login";
import Home from "./Componentes/Home";
import Perfil from "./Componentes/Perfil";
import Layout from "./Componentes/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={< Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;