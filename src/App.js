import React from 'react';
import logo from './logo.svg';
import './App.css';
import WebSocket from "./components/WebSocket";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WebSocket />
      </header>
    </div>
  );
}

export default App;
