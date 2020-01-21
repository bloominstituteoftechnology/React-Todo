import React from "react";
import shortid from "shortid";

class TodoForm extends React.Component {
    state = {
        text: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            id: shortid.generate(),
            complete: false
        })
        this.setState({
            text: ""
        });
    }

    // handleCompleted = (event) => {
    //     event.preventDefault();
    //     let todos = this.state.todos.filter(todo => !todo.completed);
    //     this.setState({todos})
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="todo..."
                />       
<<<<<<< HEAD
                <button onClick={this.handleSubmit}>Add Todo</button>
                <button onClick={this.handleCompleted}>Clear Completed</button>
=======
                <button onClick={this.handleSubmit}>submit</button>
>>>>>>> parent of c54514c... strikethrough functionality
            </form>

        );
    }
}

export default TodoForm;