import React from 'react';

class TodoForm extends React.Component {
    constructor (props) {
        super ();
        this.addTodo = props.addTodo;
        this.state ={
            task: ""      //task is the name a new task to be added to the state
        } 
        console.log(props)
    }

    formSubmit = e => {
        e.preventDefault();
        this.addTodo(this.state.task);
        this.setState({task: ""});
        console.log("submitted");
    }

    handleChanges = e => {
        this.setState({...this.state, task: e.target.value})
    }
   
    render() {
        return (
                <form onSubmit={this.formSubmit}>
                    <input 
                        type="text"
                        name="task"
                        id="task"
                        onChange={this.handleChanges}
                        value= {this.state.task}
                    />
                    <button>Add Task</button>
                </form>
    
        )
    }
}

export default TodoForm