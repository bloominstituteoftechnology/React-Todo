import React from 'react';
import Todo from './Todo';
class TodoList extends React.Component {
    handleClick = e => {
        e.preventDefault();
        this.props.clearCompleted();
    }
    render() {
        return (
            <div>
                {this.props.list.map(task => (
                    <Todo key={task.id} toggleList={this.props.toggleList} task={task} />
                ))}
                <button onClick={this.handleClick}>clear completed</button>
            </div>
            
        )
    }
};

export default TodoList;
