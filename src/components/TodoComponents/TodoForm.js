import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            input: ""
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.input);
        this.setState({input: ""});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="input"
                value={this.state.input}
                onChange={this.handleChange}
            />
            <button>Add</button>
            </form>
        );
    }
}


export default TodoForm;