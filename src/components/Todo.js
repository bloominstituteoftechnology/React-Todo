import React, { Component } from 'react';

export default class Todo extends Component {

    buttonClick = () => {
        this.props.toggleItem(this.props.item.id);
    };

    render() {
        return (
            <div onClick={this.buttonClick} className={this.props.item.completed ? 'completed':''}>
                <p>{this.props.item.task}</p>
            </div>
        )
    };
};