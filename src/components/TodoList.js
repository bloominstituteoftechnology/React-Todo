import React, { Component } from 'react';

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        };
    }
addTodo = (e) => {
    e.preventDefault();
}

handleNewTodoInput = (e)
}