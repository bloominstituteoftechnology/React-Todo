import React from 'react';


class Todo extends React.Component {
    constructor(){
        super()
        this.state = {
            todoText: ''
        };
    }
    handleChanges = e =>
    this.setState({
        todoText: e.target.value
    });
};

handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.todoText);
    this.setState({
        todoText: ''
    })
};

render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        name="item"
        placeholder="New Todo Item"
        value={this.state.todoText}
        onChange={this.handleChanges}
        />
        <button>Add</button>
        </form>
        );
    };
    

export default TodoForm;