import React, { Component } from 'react';
import Completed from './Done.js';

class TodoList extends Component {
    constructor() {
        super ();

        this.state = {
            list: [
                'Codecademy 5x / Week'
                'Review Preclass Material'
                'Complete Project'
                'Church it up!'
                'Dinner Family Plans'
                'Dinner Friend Plans'
            ],
            newItem: ''
        };
    }

    handleListInput = event => {
        this.setState({ newItem: event.target.value });
    };

    addItem = event => {
        event.preventDefault();
        const itemsList = this.state.list;
        itemsList.push(this.state.newItem);
        this.setState({
            newItem: '',
            list: itemsList
        });
    };

    render() {
        return (
            <div>
                {this.state.list.map(item => <Completed ={item} />)}
                <form onSubmit={this.addItem}>
                <input
                type="text"
                onChange={this.handleListInput}
                placeholder="Add new item"
                value={this.state.newItem}
                />
            </form>
            </div>
        );
    }
}
export default TodoList;