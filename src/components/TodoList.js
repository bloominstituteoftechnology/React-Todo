import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            newTodoItem: '',
            todos: []
        };
    }
}