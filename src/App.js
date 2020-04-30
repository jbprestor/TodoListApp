import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import CreateTodo from "./components/create-todo";
import EditTodo from "./components/edit-todo";
import TodosList from "./components/todos-list";
import logo from "./logo.svg"


function App() {
  return (
    <Router>

      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#" target="_blank">
            <img src={logo} width="80" height="80" alt="LogoPro"></img>
          </a>
          <Link to="/" className="navbar-brand">List of To Do</Link>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={TodosList}></Route>
        <Route path="/edit/:id" exact component={EditTodo}></Route>
        <Route path="/create" exact component={CreateTodo}></Route>
   
      </div>
    </Router>

  );
}



export default App;
