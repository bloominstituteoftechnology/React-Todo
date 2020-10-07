import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newItem: ''
        }
    }
    handleChange = (e) => {
        this.setState({...this.state, newItem: e.target.value})
        console.log(this.state.newItem)
    }

    submitItem = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({...this.state, newItem: ''})
    }
    render(){
    return (
    <form
    onSubmit={this.submitItem}
    >
    <input 
        placeholder='Add Item'
        name='item'
        type='text'
        value={this.state.newItem}
        onChange={this.handleChange}
    />
    <button>Add To List</button>
    </form>
    )}
}

export default TodoForm;
