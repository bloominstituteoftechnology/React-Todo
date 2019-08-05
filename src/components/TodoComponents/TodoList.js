import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return(
            <>
            {this.props.taskData.map(task => <Todo key={task.id} {...task} toggleTask={this.props.toggleTask} />)}
            </>
            )
    }
}

export default TodoList;
