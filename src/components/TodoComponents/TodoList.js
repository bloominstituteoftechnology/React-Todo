// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from "./TodoForm";
import './Todo.css';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return(
            <div className="todo-list">
                <h3>This is the ToDo list</h3>
                {this.props.listArray.map(todo => {
                    return (
                        <div>
                            {console.log(todo.id)}
                        <Todo 
                        key={todo.id} 
                        todo={todo}
                        toggleCompleted={this.props.toggleCompleted} />
                        </div>
                    );
                })}
                <TodoForm 
                addTodo={this.props.addTodo}
                handleChange={this.props.handleChange}
                handleClick={this.props.handleClick}
                handleDoubleClick={this.props.handleDoubleClick}
                />
            </div>
        )
    }
}

export default TodoList