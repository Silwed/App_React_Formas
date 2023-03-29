import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { Home } from "./Componentes/Home";
import { NavBar } from "./Componentes/NavBar";
import { Libros } from "./Componentes/Libros";



function App() {

return(
  <BrowserRouter>
<NavBar/>
<Routes>
  <Route path="/" Component={Home}/>
  <Route path="/Libros" Component={Libros}/>

  </Routes>
</BrowserRouter>
);


}

export default App;
