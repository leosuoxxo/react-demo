import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Bundle from './Bundle';



import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import About from 'bundle-loader?lazy&name=about!pages/About/About';
import Hello from 'component/Hello/Hello'

const Loading = function() {
  return <div>Loading...</div>
};

const createComponent = (component) => () => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component/> : <Loading/>
    }
  </Bundle>
);

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Hello">Hello</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={createComponent(Home)}/>
        <Route path="/About" component={createComponent(About)}/>
        <Route path="/Hello" component={Hello}/>
        </Switch>
      </div>
    </Router>
)


export default getRouter;
