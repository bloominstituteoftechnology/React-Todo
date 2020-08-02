import React from 'react'
//components
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todos = [{
    task: 'My todos go here',
    id: Date.now(),
    completed: false,
}]

class EmilyApp extends React.Component {
    //If you do a constructor you MUST DO super
    constructor() {
        super();
        this.state = {
            TodoList: todos, //takes the array we made above (toDo)
            todo: ''
        };
    }
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    //handlers go in here
    addTodo = e => {
        e.preventDefault();
        const newTodo = {
            task: this.state.todo, 
            completed: false,
            id: Date.now()
        };
        console.log(newTodo)
        this.setState({
            TodoList: [...this.state.TodoList, newTodo],
            todo: ''
        });
    };
    changeTodo = e => this.setState({ [e.target.name]: e.target.value });
    toggleTodoComplete = id => {
        let todos = this.state.TodoList.slice();
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                return todo;
            } else {
                return todo;
            }
        });
        this.setState({ todos });
    };
    handleClearCompleted = e => {
        e.preventDefault();
        let todos = this.state.TodoList.filter(todo => !todo.completed);
        this.setState({ todos });
    };
    render() {
        return (
            <div>
                <TodoList
                    handleToggleComplete={this.toggleTodoComplete}
                    todos={this.state.TodoList}
                />
                <TodoForm
                    value={this.state.todo}
                    handleTodoChange={this.changeTodo}
                    handleAddTodo={this.addTodo}
                    handleClearTodos={this.clearCompletedTodos}
                />
            </div>
        );
    }
}
export default EmilyApp;