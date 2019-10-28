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
       this.setState ({ newTask: ''});
   };

   render() {
        return(
            <form onSubmit={this.handleSubmit}>
             <label className="search-text"htmlFor= "task">Enter New Task</label>  
                <input 
                className="search-text"
                type="text"
                name="task"
                id="task"
                value={this.state.newTask}
                onChange={this.handleChanges}
                />

                <button className="submit-btn">Submit</button>
            </form>
        )
   }
    
}


export default TodoForm;