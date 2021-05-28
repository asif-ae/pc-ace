import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NotMatched from './components/NotMatched/NotMatched';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotMatched></NotMatched>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
