import React, { Component } from "react";
import Todo from "./todo";


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
        }
    };
    render() {
        return (
        <div>
            TodoList-placeholder
            <Todo/>
            <Todo/>    
        </div>
        )
    }

}
// *create todo list
//     -contain all todos
//     -display in order 
//     -dispatch infomation for creating todos
//     -recieve infomation from users- input button
export default TodoList;