import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WebSocket from "./components/WebSocket";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={WebSocket} />
          <Route exact path="/search" component={SearchBar} />
        </header>
      </div>
    </Router>
  );
}

export default App;
