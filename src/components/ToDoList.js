import { Component } from 'react';

class ToDoList extends Component{
    constructor() {
        super();
        this.state = {
            title: "To Do List",
            tasks:[]
        };
    }
    render(){
        return <h1>{this.state.title}</h1>
    }
}
export default ToDoList;