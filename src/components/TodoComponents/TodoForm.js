import React from "react";


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            newTask: "",
            id: Date.now(),
            completed: false
        }
    }
   
   handleChanges = event => {
       this.setState ({
            newTask: event.target.value
       });
   };

   handleSubmit = event => {
       event.preventDefault();
       this.props.addTask(this.state.newTask);
   };

   render() {
        return(
            <form onSubmit={this.handleSubmit}>
             <label htmlFor= "task">Add Task</label>  
                <input 
                type="text"
                name="task"
                id="task"
                value={this.state.newTask}
                onChange={this.handleChanges}
                />

                <button>Enter</button>
            </form>
        )
   }
    
}


export default TodoForm;