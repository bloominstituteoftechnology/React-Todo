import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';





class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todolist: [],
            dataInput: ''
        }
    }

    toDoHandler = event => {
        console.log(event.target.value);
        this.setState({dataInput: event.target.value})
    }


    addTodo = () => {
        const data = {task: this.state.dataInput, id: Date.now(), completed: false};
        const todolist = this.state.todolist.slice();
        todolist.push(data);
        this.setState({todolist: todolist, dataInput: ''});
    }

    clearTodo = () => {
        let todolist = this.state.todolist.filter((todo) => {
                return todo.completed === false;
            }
        );
        this.setState({todolist: todolist})
    }

    toggleFlag = id => {
        let todos = this.state.todolist.slice();
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                return todo;
            }
            else {
                return todo;
            }
        })
        this.setState({todolist: todos});
    }

    render() {
        return (
            <div className='container'>
                <div className='inner-container'>
                    <h2 className='title'>Todo List:</h2>
                    <TodoList todolist={this.state.todolist} toggleFlag={this.toggleFlag}
                              dataInput={this.state.dataInput}/>
                    <TodoForm toDoHandler={this.toDoHandler} addTodo={this.addTodo} clearTodo={this.clearTodo}
                              dataInput={this.state.dataInput}/>
                </div>
            </div>
        );
    }
}

export default App;
