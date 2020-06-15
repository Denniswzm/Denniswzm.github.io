import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import MyRouter from "./pages/Router";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <MyRouter />
      </Router>
    </div>
  );
}

export default App;
