import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Hello from 'components/Hello/Hello';


const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/hello">hello</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={(Home)} />
        <Route exact path="/about" component={(About)} />
        <Route exact path="/hello" component={(Hello)} />
      </Switch>
    </div>
  </Router>
);


export default getRouter;
