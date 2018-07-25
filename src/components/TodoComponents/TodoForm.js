import React from 'react';
import TodoList from './TodoList.js';
class TodoForm extends React.Component {
    constructor(props){
        super();
        this.state ={
            list: props
        };
    }
    render(){
        return (
            <div>
                <TodoList />
                <input placeholder="Another thing to ignore" />
                <button>Add ToDo</button>
                <button>Clear Selected</button>
            </div>
        );
    }
   
}

export default TodoForm;