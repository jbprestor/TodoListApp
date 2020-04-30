import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''} >{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <button className="buttonDesign" style={{width:80, marginRight:20, borderRadius:5}} >
                <Link to={"/edit/" + props.todo._id}>Edit</Link>
            </button>
           

        </td>
    </tr>
)

export default class TodosList extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    TodosList() {
        return this.state.todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i}></Todo>
        })
    }

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                <table className="table table-striped table-dark" style={{ marginTop: 20 }}>
                    <thead >
                        <tr>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.TodosList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
