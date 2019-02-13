import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Articles from "./components/Articles";
import Contact from './components/Contact';
import Article from "./components/Article";
import NotFound from "./components/NotFound";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <nav>
                <ul className="App-menu-bar">
                  <li>
                    <NavLink activeClassName="App-current-link" className="App-link" to="/homepage">
                      Homepage
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="App-current-link" className="App-link" to="/articles">
                      Articles
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="App-current-link" className="App-link" to="/about-me">
                      About Me
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="App-current-link" className="App-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </header>
              <Switch>
                <Route path="/homepage" component={Homepage} exact />
                <Route path="/about-me" component={AboutMe} />
                <Route path="/articles" component={Articles} exact />
                <Route path="/contact" component={Contact} />
                <Route path="/article/:id"  component={Article} exact />
                <Route component={NotFound} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}



export default App;
