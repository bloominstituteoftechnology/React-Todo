import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    render() {

        const clickHandler = () => {
            this.props.handleClear(this.props.todo.key)
        }

    return (
        <div onClick={clickHandler} className={this.props.todoClass}>
            {this.props.listItem}
        </div>
        )
    }
};

export default Todo;