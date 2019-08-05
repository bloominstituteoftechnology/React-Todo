import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super();
    }
    render() { 
        return(
            <>
            {this.props.taskData.map(item => <Todo task={this.props.task}/>)}
            </>
            )
    }
}

export default TodoList;
