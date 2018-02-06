import React from 'react';
import Task from './Task.js';

class Todo extends React.Component {
    state = {
        todos: [
            {
                newTodo: '', 
            }   
        ],

    };

    addTodo = (props) => {
        props.preventDefault();
        const updatedTodos = this.state.todos;
        updatedTodos.push(this.state.newTodo);
        this.setState({
            todos: updatedTodos,
            newTodo: ''
        });
    }

    newTodoInput = (props) => {
        this.setState({ newTodo: props.target.value });
    };
    

    render(){
        return (
            <div className="Todo">
                    {this.state.todos.map((todos, i) => {
                        <Task key={todos} todos={todos}/>
                    })}
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.newTodoInput} placeholder="Add a new todo" value={this.state.newTodo} />
                </form>
            </div>
        );
    }
}

export default Todo;