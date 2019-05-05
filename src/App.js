import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WebSocket from "./components/WebSocket";
import configureStore from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import SearchBar from "./components/SearchBar";

const reduxStore = configureStore([]);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <Router>
            <Route exact path="/" component={WebSocket} />
            <Route exact path="/search" component={SearchBar} />
          </Router>
        </header>
      </div>
    </ReduxProvider>
  );
}

export default App;
