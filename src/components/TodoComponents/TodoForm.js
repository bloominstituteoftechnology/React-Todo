import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ""
        };
    }

    handleChange = event => {
        this.setState({ [event.target.task]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.input);
        this.setState({input: ""});
    };

    render(){
        return (
        <form onSubmit={this.handleSubmit}>
            <input 
                type='text'
                name='input'
                value={this.state.input}
                onChange={this.handleChange}
            />
            <button>Add</button>
        </form>
        );
    }
}

export default TodoForm;