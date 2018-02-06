import React, { Component } from 'react';

class ToDo extends Component {
    constructor() {
        super();

        this.state = {
            toDos: ['clean bathroom'],
            newToDo: ''
        };
    }

    render() {
        return (
            <ol>{this.state.toDos.map((toDo) => <li>{toDo}</li>
            )}
            </ol>
        );
    }
}

export default ToDo;
