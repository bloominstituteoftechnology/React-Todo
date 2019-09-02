import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            newtodo:""
        };
    }

handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
}

handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.newtodo);
    this.setState({newtodo:""});
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <input type ="text" name="newtodo" placeholder="Add a new todo" value={this.state.newtodo} onChange={this.handleChange}/>
                <button type="submit">Add a new Todo</button>
                <button onClick={this.props.filterCompleted}>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;