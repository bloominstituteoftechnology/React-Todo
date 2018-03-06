import React, { Component } from 'react';
import Todo from './Todo';

class TodoItem extends Component {
    constructor() {
        super();

     
        this.state = {
            things: ['buy groceries', 'get haircut','mow lawn','wash dog'],
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

    removeThing = (event) => {
        const thingsList = this.state.things;
        const index = thingsList.indexOf(event.target.previousSibling.innerHTML)
        thingsList.splice(index, 1);
        this.setState({
            newThing: '',
            things: thingsList
        });
    }

    render() {
        const myList=this.state.things.map((thing, i) => <Todo thing={thing} removeThing={this.removeThing} key={i}/>)
        return (
            <div>
                {myList}
                <form onSubmit={this.addThing}>
                    <input type="text" onChange={this.handleThingInput} placeholder="Add a new thing to do" value={this.state.newThing} />
                </form>
            </div>
        );
    }
}

export default TodoItem;