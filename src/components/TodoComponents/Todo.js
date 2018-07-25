import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super();
        this.state = {
            task: props.task
        };
    }
    
    render(){
        return (
            <div>{this.state.task}</div>
        )
    }
};
export default Todo;