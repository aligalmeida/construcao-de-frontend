import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";

function App() {
  const index=3;
  return (
    <>
    {index == 1 && <Login />}
    {index == 2 && <Home />}
    {index == 3 && <Perfil />}
    </>
  );
}
export default App;