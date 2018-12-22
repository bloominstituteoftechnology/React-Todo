import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        this.props.onAdd(this.state.value)
        event.preventDefault();
    }

    render () {
        return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add Todo" />
        </form>
        <button onClick={this.props.handleClear}>Clear Completed</button>
        </div>
        )
    }
}

export default TodoForm;

