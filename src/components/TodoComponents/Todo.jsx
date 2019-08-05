import React, { Component } from 'react';
import TodoList from "./TodoList.jsx";

class Todo extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <TodoList />
            </React.Fragment>
         );
    }
}
 
export default Todo;