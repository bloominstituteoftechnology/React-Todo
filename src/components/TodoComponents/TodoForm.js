import React from "react"

class ListForm extends React.Component {
    constructor() {
        super();
        this.state ={
            task: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
    }

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    type= "text"
                    value= {this.task}
                    name= "task"
                    onChange={this.handleChange}
                />
                <button>Add Task</button>
            </form>
        )
    }

}


export default ListForm;