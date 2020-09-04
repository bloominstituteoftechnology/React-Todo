import React from "react";

class TodoForm extends React.Component{
    state={
        task:""
    };
    handleChanges= (e) =>{
        this.setState({
            task:e.target.value
            
        });
        console.log("you typed something")
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTask(this.state.task)
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="task"
                placeholder="type something..."
                value={this.state.task}
                onChange={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
        )
    }

}
export default TodoForm;