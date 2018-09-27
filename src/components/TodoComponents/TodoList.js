import React from 'react';
import './Todo.css';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export  class TodoList extends React.Component {

    render() {

        const message = this.props.todos.isCompleted ? 'done' : 'not done'
        return (<div className="display" >{this.props.todos.map(todo => {
            return (
                <div key={todo.id} id={todo.id} className='list todo-list' onClick={this.props.handleDelete} >
                    {todo.text}{" "}{message}<br />
                    <br />
                </div>
            )
        })}</div>
        )
    }
}

