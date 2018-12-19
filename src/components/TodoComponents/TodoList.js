import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
    render () {
        return (
            <div>
            {this.props.list.map((item) =>
            <Todo task={item.task}/>
            )}
            </div>
        )
    }
}

export default TodoList;