import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { Top } from './pages/Top';
import { Details } from './pages/Details';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Top} exact />
          <Route path="/details/:id" component={Details} exact />
        </Switch>
      </Router>
    </div>
  );
};
