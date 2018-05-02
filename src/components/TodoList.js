import React, { Component } from 'react';
import Todo from './Todo';

const styles = {
    container: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
}

class TodoList extends Component {
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
        updatedItems.push(this.state.newItem);
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
                <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
            {this.state.items.map((item, index) => <Todo key={index} item={item} />)}
                </ul>
 
            <div style={ styles.container }>
            <form onSubmit={this.addItem}>
                <input type="text" onChange={this.handleNewItemInput} placeholder="Add a new Item to your list" value={this.state.newItem} minLength="4" required />
                <input style={{ marginLeft: 10 }} type="submit" value="Submit" />
            </form>
            
            </div>
            </div>
        )
    }
 
}

export default TodoList;