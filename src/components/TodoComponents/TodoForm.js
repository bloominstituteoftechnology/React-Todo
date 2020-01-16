import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            newTask:""
        };
    }
    render(){
        return(
            <form >
                <input/>
                <button>Add task</button>
            </form>
        )
    }
}
export default TodoForm;