import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import PageCurso from './components/pages/PageCurso'
export const rutas = {
    home:'/',
    cursoName:'/curso'
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={rutas.home}>
          <Home />
        </Route>
        <Route path={`${rutas.cursoName}/:id`}>
          <PageCurso />     
        </Route>
      </Switch>
    </Router>
  );
}

export default connect(null, null)(App);
