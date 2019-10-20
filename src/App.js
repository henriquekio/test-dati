import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainContent from './components/MainContent';

import Home from './views/Home/Index';
import UpdateProducts from './views/Home/Update';
import CreateProducts from './views/Home/Create';

function App() {
  return (
    <Router>
      <MainContent>
        <Switch>
          <Route path="/produtos/novo" component={CreateProducts}/>
          <Route path="/produtos/:id" component={UpdateProducts}/>
          <Route path="/" component={Home}/>
        </Switch>
      </MainContent>
    </Router>
  );
}

export default App;
