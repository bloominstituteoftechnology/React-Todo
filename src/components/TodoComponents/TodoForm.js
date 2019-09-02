import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newtodo: ""
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.newtodo)
    }


    render() {
        return (
            <form>
                <input type="text"
                    name="newtodo"
                    placeholder="Add a new todo"
                    onChange={this.handleChange}
                    value={this.state.newTodo}
                />
                <button type="submit">Add a new Todo</button>
            </form>
        )
    }
}

export default TodoForm;