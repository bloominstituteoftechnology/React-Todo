import React from 'react';
import './TodoItem.css'

export default class TodoItem extends React.Component {
    addTodo(id) {
        this.props.addTodo(id);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render () {
        return (
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>remove</button>{this.props.Todo.text}
            </div>
        )
    }
}