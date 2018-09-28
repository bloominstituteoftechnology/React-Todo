import React from 'react';
import ReactDom from 'react-dom' 
import './Todo.css'


class Todo extends React.Component {

      
    render(){

        const message = this.props.todo.completed ? 'done' : 'not done'
        // Regular JS Ternary statements can be used in render methods.

        const clickHander = () => {
            
            this.props.handleClick(this.props.todo.id)
            // clickHandler is a function, passed from top level state down to a grandchild component as a prop(erty).
        }
        return(
            <div className='todoDiv'>
            <h1 onClick={clickHander}>
            {/* 
            onClick is a React  synthetic click event handler, which can be set to a function specifying what actions,
            should take place when the event is fired. Here, it is being passed the clickHandler function as a prop.
            
             */}

            
            {this.props.todo.task} is {message}
            </h1>
            {/* <input />
            <button onClick={this.props.addTodo}>Add Todo</button>
            Here, onClick is calling the addTodo function passed to it as a prop from top-level state.
            <button>Clear All</button> */}
            
           </div>
        )
    }
}


export default Todo