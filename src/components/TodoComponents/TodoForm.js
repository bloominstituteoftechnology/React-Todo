import './Todo.css'
import React from 'react';
import Todo from './Todo';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    render () {

        return (
            <form action="">
            <Todo />
            
            </form>
        );

    }
}

export default TodoForm; 
