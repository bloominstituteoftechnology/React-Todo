import React from 'react';
import ReactDom from 'react-dom' 
import './Todo.css'


class Todo extends React.Component {

      
    render(){

        const message = this.props.todo.completed ? 'done' : 'not done'

        const clickHander = () => {
            
            this.props.handleClick(this.props.todo.id)
        }
        return(
            <div className='todoDiv'>
            <h1 onClick={clickHander}>
            {this.props.todo.task} is {message}
            </h1>
            {/* <input />
            <button onClick={this.props.addTodo}>Add Todo</button>
            <button>Clear All</button> */}
            
           </div>
        )
    }
}


export default Todo