import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import HoyPage from "./components/pages/HoyPage";
import NovedadesPage from "./components/pages/NovedadesPage";
import PersonasPage from "./components/pages/PersonasPage";
import Trabajoenclase from "./components/pages/Trabajoenclase";
import MaterialesPage from "./components/pages/MaterialesPage";
export const rutas = {
  home: "/",
  cursoName: "/PROGRAMACION%20DE%20VIDEOJUEGOS",
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={rutas.home}>
          <Home />
        </Route>
        <Route exact path={`/curso/:id`}>
          <HoyPage />
        </Route>
        <Route path={`/curso/:id/conferencias`}>
          <NovedadesPage />
        </Route>
        <Route path={`/curso/:id/trabajoenclase`}>
          <Trabajoenclase />
        </Route>
        <Route path={`/curso/:id/personas`}>
          <PersonasPage />
        </Route>
       <Route path={`/curso/:id/materiales`}>
          <MaterialesPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default connect(null, null)(App);
