import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
          message: ''
        }
      }

      handleChanges = e => {
        // update state with each keystroke
        this.setState({message: e.target.value})
      };

submitItem = e => {
    e.preventDefault();
    this.setState({message: ''});
    this.props.addTask(this.state.message);
}

    render() {
    return (
        <form onSubmit={this.submitItem}>
        <input placeholder="...todo" value={this.state.message} onChange={this.handleChanges} />
        <button>Add task</button>
        </form>
    )
    }
}


export default TodoForm
