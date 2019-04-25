import React from 'react';

class TodoListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
    };

    onUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
      };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.input);
        this.setState({ input: "" });
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="input"
                    id="new-item"
                    placeholder="...todo"
                    value={this.state.input}
                    onChange={this.onUpdate}
                    />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
    
};

export default TodoListForm;