import React from "react";

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state={
            activityName:"",
        }
    }

    handleChanges = e =>{
        this.setState({
            //sets the activity name to whatever the value inputed is
            activityName: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addActivity(this.state.activityName)
        //changes the state back to an empty string
        this.setState({
            activityName:""
        })
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <div className="todo-form">
                <input
                     value={this.state.activityName}
                     onChange={this.handleChanges}
                     placeholder="Add activity"
                />
                <button>Add</button>

            </div>

        </form>
        )}


}

export default TodoForm;