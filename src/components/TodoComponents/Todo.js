import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super();
        let { completed, task } = props.task;
        this.state = {
            task: task,
            completed: completed
        };
    }

    
    
    render(){
        return (
            <div>{this.state.task}</div>
        )
    }
};
export default Todo;