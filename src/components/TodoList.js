import React, { Component } from 'react'; 

class ToDoList extends Component {
    constructor() {

        super();

        this.state = {
        toDoItems: ['A', 'B', 'C'],
        newToDo: '',


        };    
    };

    addToDo = (event) => {
        event.preventDefault();
        const toDoItemsList = this.state.toDoItems;
        toDoItemsList.push(this.state.newToDo);
        
        this.setState ({
            newToDo: '',
            toDoItems: toDoItemsList,
        });
    };
    
    render() {
        return (
            <div>
                {this.state.toDoItems.map((toDoItem) => <div>{toDoItem}</div>)}
            </div>
        );

    };
        

    };

    export default ToDoList;