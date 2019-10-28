import React from 'react';


class TodoForm extends React.Component {

    constructor(){
super();
this.state ={
    newTask: "",
}
}

handleChanges = e =>{
    this.setState({
        newTask: e.target.value
    });

};

handleSubmit = e =>{
e.preventDefault();
this.props.addTask(this.state.newTask);
this.setState({newTask: ""})
}



render() {
    return(
        <div className= "todoform">
        <form >
            <label >
                <input type = 'text'
                name = 'task'
                id = 'task'
                value = {this.state.newTask}
                onChange= {this.handleChanges}
                />
            </label>
            <button type= 'submit' onClick={this.handleSubmit}>Add Todo</button>
            
        </form>
        <span>
        <button type= 'submit' onClick ={this.deleteCompleted}>Delete Completed</button>
        </span>
        </div>
    )
}


}
export default TodoForm;