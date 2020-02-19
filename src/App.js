import React from 'react';
import './App.css';
import { LoftProvider } from "./Context"

import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Lofts from "./pages/Lofts"
import Loft from "./pages/Loft"
import Error from "./pages/Error"

import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <LoftProvider>
    <Router>
    < NavBar />
    <Switch>
    <Route  exact path="/" component={Home} />
    <Route  exact path="/lofts/" component={Lofts} />
    <Route  exact path="/lofts/:slug" component={Loft} />

    <Route component={Error} />
    </Switch>
    </Router>
    </LoftProvider>
    </>
  );
}

export default App;
