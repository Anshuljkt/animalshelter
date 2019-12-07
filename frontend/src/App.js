import React from 'react';
import './App.css';
import AboutPage from './AboutPage.js'
import Home from './Home.js'
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <section>
      <Switch>
        <Route exact path = "/">
         <Home />
        </Route>
        <Route exact path = "/about">
          <AboutPage />
        </Route>
      </Switch>
    </section>
    </BrowserRouter>
  );
}

export default App;
