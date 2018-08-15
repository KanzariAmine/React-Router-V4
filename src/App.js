import React, { Component } from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import  'reactstrap';
import Home from './components/home';
import Category from './components/category';
import Products from './components/products';
import {fakeAuth} from './components/login';
import Admin from './components/admin';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router V4</h1>
        </header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
          <ul className="navbar-nav">
            {/*Link components are used for linking to other views*/}
            <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category">Category</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin">Admin Area</Link></li>
          </ul>
        </nav>
        {/*Route components are rendered if the path prop matches the current URL*/}
        <Switch>
          <Route exact={true} path="/" component={Home}/>{/*If you want a route to be rendered only if the paths are exactly the same, you should use the exact props. */}
          <Route path="/category" component={Category}/>
          <Route path="/products" component={Products}/>
          <Route path="/:id" render = {() => (<p>I want this text to show up for all routers other than '/', '/products' and '/category'</p>)}/>
          <PrivateRoute  path="/admin" component={Admin}/>
        </Switch>
      </div>
    );
  }
};

//Private router function
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )}
    />
  );
};

export default App;
