import React from 'react';
import ToDo from './ToDo.js';

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoitems: [
            {
                id:1,
                text:"a",
            },
            {
                id:2,
                text:"b",
            },
            {
                id:3,
                text:"c",
            }
            ]
        }
    }
    render() {
        return (
            this.state.todoitems.map(x => {
                return <ToDo key={x.id} item={x} />;
            })
            
        );
    }
}
export default ToDoList;