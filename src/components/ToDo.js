import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDo extends Component {
    constructor(){
        super();
        this.state = {
            todo: ['run', 'eat', 'work'],
        };
    }

    render() {
        return (
            <div>
                {this.state.todo.map((item, index) => {
                    return <ToDoItem key={index}  todo={item} />
                })}
                <form>
                    <input text="text" />
                </form>
            </div>
        );
    }
}

export default ToDo;