import React from 'react';
import { Component } from 'react';
import Input from './Input';

class List extends Component {
    constructor() {
        super();
        this.state = {
            newItem: '',
            items: ['Add new items to To-Do list'],
            isStrikeThrough: 'list'
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.addItemHandler = this.addItemHandler.bind(this);
        this.strikeThrough = this.strikeThrough.bind(this);
    }

    changeHandler(event) {
        this.setState({
            newItem: event.target.value
        })
    }

    addItemHandler() {
        const newItem = this.state.newItem;
        const items = this.state.items;
        items.push(newItem);
        this.setState({
            items,
            newItem: ''
        });
    }

    strikeThrough() {
        this.setState({
            isStrikeThrough: !this.state.isStrikeThrough
        });
    }

    render() {
        return (
            <Input items={this.state.items} newItem={this.state.newItem} changeHandler={this.changeHandler} addItemHandler={this.addItemHandler} strikeThrough={this.strikeThrough} />
        );
    }
}

export default List;