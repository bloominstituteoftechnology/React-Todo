import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';
import Search from './components/TodoComponents/Search';




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

    constructor () {
        super();
        this.state = {
            todos: [
                {
                    task: 'Finish MVP',
                    id: 4566,
                    completed: false
                },
                {
                    task: 'Try Stretch Goals',
                    id: 5678,
                    completed: false
                }
            ],

            todo: '',

            filtered: [{
                task: 'Finish MVP',
                id: 4566,
                completed: false
            },
            {
                task: 'Try Stretch Goals',
                id: 5678,
                completed: false
            }],
        }
    }

addTodo = element => {
    element.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '', filtered: todos });
}

changeTodo = element => this.setState({ [element.target.name]: element.target.value });

toggleTodoComplete = element => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
        if (todo.id === element) {
            todo.completed = !todo.completed;
            return todo;
        } else {
            return todo;
        }
    });
    
    this.setState({ filtered: todos });
}

clearCompletedToDos = element => {
    element.preventDefault();
    let todos = this.state.todos.slice();
    let filtered = this.state.filtered.slice();
    todos = todos.filter(todo => !todo.completed);
    filtered = filtered.filter(e => !e.completed);
    this.setState({ filtered, todos });
}

handleChange = e => {
    let currentList = [];
    let newList = [];

    
        currentList = this.state.todos;
        console.log(currentList)
        newList = currentList.filter(item => {
            console.log(item.task.toLowerCase())
            const lc = item.task.toLowerCase();
            const filter = e.target.value.toLowerCase();
            return lc.includes(filter);
        });

    this.setState({
        filtered: newList,
    });
}

    render() {
        return (
            <div class="wrapper">
                <TodoForm
                    value = {this.state.todo}
                    handleToDoChange = {this.changeTodo}
                    handleAddTodo = {this.addTodo}
                    handleClearTodos = {this.clearCompletedToDos}
                />
                <Search 
                    handleSearch = {this.handleChange}
                
                />
                <TodoList
                    handleToggleComplete = {this.toggleTodoComplete}
                    todos={this.state.filtered}
                />
            </div>
        );
    }
}

export default App;
