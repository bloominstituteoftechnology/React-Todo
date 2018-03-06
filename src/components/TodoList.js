/* import React, { Component } from 'react'; */

class ToDoList extends Component {
    constructor() {

        super();

        this.state = {
        toDoItems: [],
        newToDo: '',


        };    
    }

    addToDo = (event) => {
        event.preventDefault();
        const toDoItemsList = this.state.toDoItems;
        toDoItemsList.push(this.state.newToDo);
        
        this.setState ({
            newToDo = '',
            toDoItems = toDoItemsList,
        });

        

    };

    

}