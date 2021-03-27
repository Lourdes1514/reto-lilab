import React from 'react';
import * as component         from './components/index.components'
import './App.sass';
import { HashRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router className="xsc10">
      <Switch>
        <Route path="/" exact component={component.Dashboard} />
        <Route path="/add-post" exact component={component.AddPost} />
      </Switch>

    </Router>
  );
}

export default App;
