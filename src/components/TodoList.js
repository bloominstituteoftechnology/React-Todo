// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css'

class TodoList extends React.Component {
    render() {
        return (
            <div className='task-list'>
                {this.props.todoList.map(task => (
                    <Todo key={task.id} item={task} toggleItem={this.props.toggleItem}/>
                 ))}
                <button className='clear-btn' onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoList;