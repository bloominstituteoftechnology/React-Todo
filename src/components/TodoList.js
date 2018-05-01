import React, { Component } from "react";
import Todo from "./Todo";

class Todo extends Component {
    constructor() {
        super(props) 
        this.state = {
            title: "Do Your Work!",
            list: [],
            newTask: ""
        };
    }

    handleListChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    handleSubmitChar = () => {
        const list = this.state.list;
        list.push(this.state.newTask);
        this.setState({list: list, newTask: ''});
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <TodoList list={this.state.list} />
            </div>
export default TodoList