import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Index';
import CreateProducts from './views/Home/Create';
import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <MainContent>
        <Switch>
          <Route path="/produtos" component={CreateProducts}/>
          <Route path="/" component={Home}/>
        </Switch>
      </MainContent>
    </Router>
  );
}

export default App;
