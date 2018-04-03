import React, { Component } from 'react';
import { render } from 'react-dom';
import ItemList from './App';

class TotalApp extends Component {
    constructor() {
        super();
        this.state = {
            newItem: '',
            items: ["Rake Leaves","Milk Cow","Sell onions"]
        };
    }

    handleAddItem = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmitItem = () => {
        const { items } = this.state;
        items.push(this.state.newItem);
        this.setState({ items, newItem: ""});
    };

    render () {
        return(
            <div>
                <h2>To-Do List</h2>
                <ItemList {...this.state}/>
                <h3>Add an item</h3>
                <input type="text" placeholder="add an item" onChange={this.handleAddItem} name="newItem" value={this.state.newItem}/>
                <button onClick={this.handleSubmitItem}>Submit</button>
            </div>
        );
    }
}


render(<TotalApp />, document.getElementById('root'));
