// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';







class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {

            newTodo: "",
            todos: [],

        };
    }



newListItem = event => {                    //the 'event' here is the action of submitting a new list item
    const updatedTodos = this.state.todos;  // this refers to the array and the current state of it (starts out empty, but after several 
                                            // items are submitted, the 'state' updates and the array has your previous entries)
                                                     
    updatedTodos.push(this.state.newToDo); //this adds our latest list item to our latest version of the array
    
    this.setState({ todos: updatedTodos, newTodo: ''})  //
}


}