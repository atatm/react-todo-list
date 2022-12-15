import React from "react"
import ReactDOM from "react-dom"
//import { Route, Switch } from "react-router-dom"
//import TodoContainer from "./components/TodoContainer"
import TodoContainer from "./functionBased/components/TodoContainer"
//import "./App.css"
import "./functionBased/App.css"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <TodoContainer />
  </Router>
</React.StrictMode>
, document.getElementById("root"))