import React from "react";


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            newItemName:""
        };
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            newItemName: e.target.value
        });
    };
    
    handleSubmit = e => {
        e.preventDefault();
           this.props.addTask(this.state.newItemName)
       
    };

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input
                    type ="text"
                    name = "task"
                    value = {this.state.newItemName}
                    onChange = {this.handleChanges}
                />
                <button>Add New Task</button>
            </form>
        );
    }
}

export default TodoForm;