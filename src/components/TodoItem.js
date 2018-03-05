import React, { Component } from 'react';
import Todo from './Todo';

class TodoItem extends Component {
    constructor() {
        super();

     
        this.state = {
            things: ['buy groceries', 'get haircut', 'mow lawn', 'wash dog'],
            newThing: ''
        };
    }

    handleThingInput = (event) => {
        this.setState({ newThing: event.target.value });
    };

    addThing = (event) => {
        event.preventDefault();
        const thingsList = this.state.things;
        thingsList.push(this.state.newThing);
        this.setState({
            newThing: '',
            things: thingsList
        });
    };

    render() {
        return (
            <div>
                {this.state.things.map(thing => <Todo thing={thing} />)}
                <form onSubmit={this.addThing}>
                    <input type="text" onChange={this.handleThingInput} placeholder="Add a new thing to do" value={this.state.newThing} />
                </form>
            </div>
        );
    }
}

export default TodoItem;