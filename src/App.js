import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NotMatched from './components/NotMatched/NotMatched';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            
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
