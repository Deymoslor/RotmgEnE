import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer/indexFooter';
import Home from './pages'
import WikiPage from './pages/wiki/wiki';
import WikiEmpezar from './pages/wiki/empezar/wikiEmpezar';
import WikiClases from './pages/wiki/clases/WikiClases'
import Media from './pages/Media/Media';
import GuiasPrincipal from './pages/Guias/GuiasPrincipal';
import GuiasEscoger from './pages/Guias/Escoger/GuiasEscoger';
import GuiasEsquivar from './pages/Guias/Esquivar/GuiasEsquivar';
import Registro from './pages/registro/Registro';
import IniciarSesionP from './pages/IniciarSesion/IniciarSesion';

function App() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <Router>
      <Switch>
          <Route path="https://deymoslor.github.io/RotmgEnE/"  exact>
            <Navbar toggle={toggle}></Navbar>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/wiki" exact>
            <Navbar toggle={toggle}></Navbar>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <WikiPage></WikiPage>
            <Footer></Footer>
          </Route>
          <Route path="/media" exact>
            <Navbar toggle={toggle}></Navbar>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Media></Media>
            <Footer></Footer>
          </Route>
          <Route path="/wiki/empezar" exact>
            <Navbar toggle={toggle}></Navbar>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <WikiEmpezar></WikiEmpezar>
            <Footer></Footer>
          </Route>
          <Route path="/wiki/clases" exact>
            <Navbar toggle={toggle}></Navbar>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <WikiClases></WikiClases>
            <Footer></Footer>
          </Route>
          <Route path="/guias" exact>
            <Navbar toggle={toggle}></Navbar>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <GuiasPrincipal></GuiasPrincipal>
            <Footer></Footer>
          </Route>
          <Route path="/guias/escogerClase"  exact>
            <Navbar toggle={toggle}></Navbar>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <GuiasEscoger></GuiasEscoger>
            <Footer></Footer>
          </Route>
          <Route path="/guias/esquivar"exact>
            <Navbar toggle={toggle}></Navbar>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <GuiasEsquivar></GuiasEsquivar>
            <Footer></Footer>
          </Route>
          <Route path="/registro" exact>
            <Registro></Registro>
          </Route>
          <Route path="/signin" exact>
            <IniciarSesionP></IniciarSesionP>
          </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
