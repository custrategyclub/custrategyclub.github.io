import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";

import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <ContentContainer>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ContentContainer>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
