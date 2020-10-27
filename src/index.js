import React from 'react';
import ReactDOM from 'react-dom';


import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
// import './styles.scss'


const todos = [
    {
      name: 'Water Plants',
      id: 123,
      done: false
    },
    {
      name: 'Go Shopping',
      id: 124,
      done: false
    },
    {
      name: 'Mow the Lawn',
      id: 1235,
      done: false
    },
    {
      name: 'Clean the Garage',
      id: 1246,
      done: false
    },
    {
      name: 'Clean the House',
      id: 1237,
      done: false
    },
    {
      name: 'Pay Bills',
      id: 1248,
      done: false
    }
  ];

class Apps extends React.Component {
    //constructor with state
    constructor() {
        super();
        this.state = {
            todos: todos
        }
    }

    handleToggleTodo = (todoId) => {
        this.setState({
            todos:this.state.todos.map(todo => {
                if(todo.id === todoId) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    handleAddTodo = (name) => {
        this.setState({
            todos:[...this.state.todos, {
                name: name,
                id: this.state.todos.length,
                done: false
            }]
        })
    }

    clearTodos = () => {
        this.setState({
            todos:this.state.todos.filter(todo =>(!todo.done))
        });
    };

    // class methods to update state
    render() {
        return (
            <div className="Apps">
                <div className="header">
                    <h1>Todo List</h1>
                    <TodoForm handleAddTodo={this.handleAddTodo} />
                </div>
                <TodoList handleClearTodo={this.clearTodos} handleToggleTodo
                = {this.handleToggleTodo} todos={this.state.todos} />
            </div>
        )
    }
}
const rootElement = document.getElementById('root');
ReactDOM.render(<Apps />, rootElement);
