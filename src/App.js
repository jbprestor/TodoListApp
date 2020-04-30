import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import CreateTodo from "./components/create-todo";
import EditTodo from "./components/edit-todo";
import TodosList from "./components/todos-list";
import logo from "./logo.svg"
import './App.css';

function App() {
  return (
    <Router>
      <div className="container left">
      </div>

      <div className="container middle">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width="80" height="80" alt="#" />
          </a>
          <Link to="/" className="navbar-brand">ATHLETICS APP</Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create New Note</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>

      <div className="container right">

      </div>

    </Router>

  );
}



export default App;
