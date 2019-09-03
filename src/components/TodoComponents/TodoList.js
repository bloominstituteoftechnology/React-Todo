// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'
import TodoForm from "./TodoForm"

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return(
            <div className="todo-list">
                <h3>This is the ToDo list</h3>
                {this.props.listArray.map(toDo => {
                    return (
                    <div className="todo" key={""}>
                        <Todo toDoItem={toDo}/>
                    </div>
                    );
                })}
                <TodoForm handleChange={this.props.handleChange}/>
            </div>
        )
    }
}

export default TodoList