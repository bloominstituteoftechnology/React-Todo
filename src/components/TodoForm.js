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
        this.state({
            newItemName: e.target.value
        });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItemName);
    };

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input
                    type ="text"
                    name = "task"
                    value = {this.state.newItemName}
                    onChange = {this.handleChanges}
                />
            </form>
        );
    }
}

export default TodoForm;