import React from 'react';

const style = {
    textDecoration: 'none'
};

class Todo extends React.Component {
    constructor(props){
        super();
        let { completed, task } = props.task;
        this.state = {
            task: task,
            completed: completed
        };
        console.log(this.state);
        
    }

    handleCompleted = () => {
        let comp = this.state.completed === true ? false : true;
        console.log(comp);
        this.setState({
            completed : comp
        });
    }
    
    render(){
        return (
            <div onClick={this.handleCompleted} style={this.state.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{this.state.task}</div>
        )
    }
};
export default Todo;