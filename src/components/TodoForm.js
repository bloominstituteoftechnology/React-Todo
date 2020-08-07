import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            task:""
        };
    }

    handleChanges=e=>{
        this.setState({
            task:e.target.value
        })
    };

    submitTask=e=>{
        e.preventDefault();
        this.props.addTask(this.state.task)
        this.setState({task:""});
    };

    render(){
        // console.log(this.state.task)
    return(
        <div>
        <form onSubmit={this.submitTask}>
        <input 
            type='text' 
            placeholder='things to do...'
            name="task"
            value={this.state.task}
            onChange={this.handleChanges}    
        />
        <button >Add to do</button>
        <button onClick={this.props.clearCompleted}>clear completed</button>  
        </form> 
        </div> 
    );
}
};

export default TodoForm;