import React from 'react';

class TodoForm extends React.Component {
constructor() {
    super()
    this.state = {
        value: ""
    };
}

handleChange = e => {
    this.setState({
        value: e.target.value
    });
};

handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(e, this.state.value);
    this.setState({
        value: ""
    });
};



render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>Add Item</label>
            <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange} />
            <button type='submit'>Submit</button>
        </form>
    );
  } 
}

export default TodoForm;