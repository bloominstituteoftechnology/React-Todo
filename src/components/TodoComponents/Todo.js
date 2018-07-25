import './Todo.css'
import React from 'react';


class Todo extends React.Component {
    constructor(){
        super();
        this.state = {};
    }


    render () {

        return (
            <div className ="formOptions">
                <input type="text" placeholder ="...todo"/> 
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        );

    }
}

export default Todo; 