import React, { Component } from 'react';
// import ToDoList from './ToDoList';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.newProps = props;
    }
    render() {
        return (
            <ul>
                {this.newProps.tasks.map(task => {
                    return <li key="task" onClick={this.li.onClick.bind(this)}>{task}</li>
                })}
            </ul>
        );
    }
}
export default TaskList;