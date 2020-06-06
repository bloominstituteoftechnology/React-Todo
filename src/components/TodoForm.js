import React, { Component } from 'react';

export default class TodoForm extends Component {
    constructor()
    {
        super();
        this.state = {newItem: ''}
    }

    // Change Hanlder
    handleChange = event => {
        this.setState({newItem: event.target.value});
    }
    //Submit
    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewTodo(this.state.newItem);
        this.setState({newItem: ''});
    }
    //render
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    name='item' 
                    value={this.state.newItem} 
                    onChange={this.handleChange}
                    placeholder='Enter new todo item'
                />
                <button className='new-btn'>Add New Todo</button>
            </form>
        );
    }
}