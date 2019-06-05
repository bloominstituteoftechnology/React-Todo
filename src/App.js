import React from 'react';
import Todo from './components/Todo.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        }
    }

    addTodo = e => {
        e.preventDefault();
        const todos = this.state.todos;
        const newTodo = this.state.newTodo;
        todos.push(newTodo);
        this.setState({
            todos: todos,
            newTodo: ''
        })
    }

    changeHandler = e => {
        const newTodo = e.target.value;
        this.setState({
            newTodo: newTodo
        })
    }

    render() {
        return (
            <div>
                {this.state.todos.map((todo, index) => {
                    return <Todo todo={todo} key={index} />
                })}
                <form onSubmit={this.addTodo}>
                  <input type="text" value={this.state.newTodo} onChange={this.changeHandler}/>
                </form>
            </div>
        )
    }
}

export default App;