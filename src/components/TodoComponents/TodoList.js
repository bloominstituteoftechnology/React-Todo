// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Todo from './Todo';


import React from "react";
import ReactDOM from "react-dom";

class TodoList extends React.Component {

    render() {
        return ( <
            div > 
{this.props.todos.map(todo => {

   return <Todo text="I am me" todo={todo} key={todo.id} handleClick={this.props.handleClick} />
})}
             </div>
        )
    }

}


/* class TodoList extends React.Component {
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
} */

export default TodoList;