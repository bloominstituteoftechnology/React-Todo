import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        };
    };
    
    addTodo = (event) => {
        event.preventDefault();
        const newTodos = this.state.todos;
        newTodos.push(this.state.newTodo);
        this.setState({
            todos: newTodos,
            newTodo: ''
        });
    };

    handleNewTodo= (event) => {
        this.setState({newTodo: event.target.value});
    };

    render() {
        return(
            <div>
                {this.state.todos.map((todo,index)=><Todo key={todo + index} todo={todo}/>)}
                <form onSubmit ={this.addTodo}>
                    <input
                        type="text"
                        onChange={this.handleNewTodo}
                        placeholder="New Task"
                        value={this.state.newTodo}
                    />
                </form>
            </div>    
        );
    };
};

export default TodoList;