// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Todo from './Todo';


import React from "react";
import ReactDOM from "react-dom";


class TodoList extends React.Component {
    constructor(){
        super()
        
        this.state = {
            
        }

        
    }

    render(){
        return(
            <Todo />
        );
    }
}

export default TodoList ;