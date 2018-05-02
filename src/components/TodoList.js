import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor() {
        super(); 
        this.state = {
            title: "Do Your Work!",
            list: [],
            newTask: ""
        };
    }

    handleListChange(event) {
        this.setState({ newTask: event.target.value});
    }

    handleSubmitChar() {
        const updateList = this.state.list;
        updateList.push(this.state.newTask);
        this.setState({list: updateList, newTask: ""});
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.newTask}</p>
                <input placeholder = "add more tasks!" onChange = {this.handleListChange.bind(this)} />
                <button onClick = {this.handleSubmitChar.bind(this)}>add task</button>
                <Todo list={this.state.list} />
            </div>
        )};
    }

export default TodoList;