import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        console.log(props)
        super();
    }
    render() { 
        return(
            <>
            {this.props.taskData.map(task => <Todo key={task.id} {...task}/>)}
            </>
            )
    }
}

export default TodoList;
