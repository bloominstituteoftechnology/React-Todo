import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            newThing: ''
        };
    }

    handleThingInput = (event) => {
        this.setState({ newThing: event.target.value });
    };

    handleComplete = (event) => {
        window.localStorage.setItem(event.target.innerHTML, `{"name": "${event.target.innerHTML}", "completed": ${(event.target.style.textDecoration === "none")}}`)
        this.setState({
        });
      };

    addThing = (event) => {
        event.preventDefault();
        const newName = `${localStorage.length + 1}. ${this.state.newThing}`;
        window.localStorage.setItem(newName, `{"name": "${newName}", "completed": false}`);
        this.setState({
            newThing: ''
        });
        
    };

    removeThing = (event) => {
        window.localStorage.removeItem(event.target.previousSibling.innerHTML)
        this.setState({
        });
    }

    render() {
        let myList=Object.values(window.localStorage).map((thing) => JSON.parse(thing)).map((thing, i) => <Todo thing={thing.name} removeThing={this.removeThing} handleComplete={this.handleComplete} completed={thing.completed} key={i}/>)
        return (
            <div>
                {myList}
                <form onSubmit={this.addThing}>
                    <input className="Todo__input" type="text" onChange={this.handleThingInput} placeholder="+" value={this.state.newThing} />
                </form>
            </div>
        );
    }
}

export default TodoList;