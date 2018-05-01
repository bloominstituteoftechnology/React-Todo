import React, { Component } from 'react';


class Todo extends Component {
    constructor() {
      super();
      this.state = {
        newItem: '',
        items: []
      };
    }
  
    addItem = (event) => { // runs when form is submitted
        event.preventDefault();
        const updatedItems = this.state.items;
        updateItems.push(this.state.newItem);
        this.setState({
            items: updatedItems,
            newItem: ''
        });
    };
    
    handleNewItemInput = (event) => {
        this.setState({ newItem: event.target.value});
    };

    render() {
        return (
            <div>
            {this.state.items.map((item, index) => <Todo key={index} item={item} />)}
            <form onSubmit={this.addItem}>
                <input type="text" onChange={this.handleNewItemInput} placeholder="Add a new Item to your list" value={this.state.newItem} />
            </form>
            </div>
        )
    }
 
}