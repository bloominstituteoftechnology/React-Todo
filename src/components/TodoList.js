import React, { Components } from 'react';
import Todo from './Todo';

class TodoList extends Components {
    constructor() {
        super();
        this.state = {
            list: [],
            newTodo: "",
        }
    }

    addTodo = (event) => {
        const list = this.state.list;
        const newTodo = this.state.newTodo;
        list.push(newTodo);
        this.setState({list: list, newTodo: ''});
    }

    render() {
        return(
            <div>
                {this.state.list.map((item, index) => {
                return(<Todo key={index} todo={item} />)}
            </div>
        );
    }
}

export default TodoList;