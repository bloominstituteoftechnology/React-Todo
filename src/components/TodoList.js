import React, { Component } from "react";
import Todo from './Todo';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            newTodo: ""
        }
       
    };

 addTodo = (event) => {
        event.preventDefault();
        const todos = this.state.todos;
        const newTodo = this.state.newTodo;
        todos.push(newTodo);
        this.setState({
            todos: todos,
            newTodo: '' 
        });
    }

handleTaskInput = (event) => {
    const newTodo = event.target.value;
    this.setState({ 
        newTodo: newTodo
    });
};

    render() {
        return (
            <div className='TodoList' >
                {this.state.todos.map((todo, i) => <Todo todo={todo} key={i}/>)}

                <form onSubmit={this.addTodo}>
                    <input type='text'
                    onChange={this.handleTaskInput}
                    placeholder="Add new task"
                    value={this.state.newTodo}/>
                </form>
            </div>
        );
    }
}

export default TodoList;