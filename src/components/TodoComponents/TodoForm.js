import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.addTodo(event, this.state.value)

        this.setState({
            value: ""
        })
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value= {this.state.value}
                    onChange={this.handleChange} 
                    placeholder= "...todo"
                />
                <button>Add Todo</button>
 
            </form>
        )
    }
}

export default TodoForm;