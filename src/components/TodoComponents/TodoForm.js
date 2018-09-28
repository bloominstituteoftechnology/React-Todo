import React from 'react';
import ReactDom from 'react-dom' 
import './Todo.css'
class TodoForm extends React.Component {
   


    render(){
        return(
            <div className='todoFormDiv'>
            <div>
                <input value={this.props.newTodo} onChange={this.props.changeHandler} />
            <button onClick={this.props.addTodo}>Add Todo</button>
            </div>
                <div>  <button onClick={this.props.clearAll}>Clear All</button><span>Click with caution!</span></div>
          
            </div>

        )
    }
}

export default TodoForm 