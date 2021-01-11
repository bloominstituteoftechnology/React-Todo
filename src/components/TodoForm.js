import React from "react";

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state ={
            inputValue: ""
        }
    }

    handleChanges = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleTaskAdd(this.state.inputValue);
        this.setState({
            inputValue: ""
        });
    }

    render() {
        return (
            <form onSubmit ={this.handleSubmit}>
                <input value={this.state.inputValue} onChange = {this.handleChanges} type= "text" name="task" />
                <button>Add</button>
            </form>
        );
    }
}

export default ToDoForm;