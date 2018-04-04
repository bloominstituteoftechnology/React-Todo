import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            newThing: ''
        };
    }

    listInput = (e) => {
        this.setState({ newThing: e.target.value });
    };

    listItemDone = (e) => {
        window.localStorage.setItem(e.target.innerHTML, `{"name": "${e.target.innerHTML}", "completed": ${(e.target.style.textDecoration === "none")}}`)
        this.setState({
        });
      };

    addToList = (e) => {
        e.preventDefault();
        const newName = `${localStorage.length + 1}. ${this.state.newThing}`;
        window.localStorage.setItem(newName, `{"name": "${newName}", "completed": false}`);
        this.setState({
            newThing: ''
        });
        
    };

    removeFromList = (e) => {
        window.localStorage.removeItem(e.target.previousSibling.innerHTML)
        this.setState({ });
    }

    render() {
        let myList=Object.values(window.localStorage).map((thing) => JSON.parse(thing)).map((thing, i) => <Todo thing={thing.name} removeFromList={this.removeFromList} listItemDone={this.listItemDone} completed={thing.completed} key={i}/>)
        return (
            <div>
                {myList}
                <form onSubmit={this.addToList}>
                    <input className="Todo__input" type="text" onChange={this.listInput} placeholder="add item to list" value={this.state.newThing} />
                </form>
            </div>
        );
    }
}

export default TodoList;