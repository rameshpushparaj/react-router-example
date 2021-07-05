import React from 'react';
import Home from './Home';
import About from './About';
import Post from './Post';
import Account from './Account';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import './style.css';

export default function App() {
  const isLoggedIn = true;
  return (
    <div className="app">
      <BrowserRouter>
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/post/89">Post</Link>
            </li>
            <li>
              <Link to="/account">Account </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/account">
            {isLoggedIn ? <Account /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
