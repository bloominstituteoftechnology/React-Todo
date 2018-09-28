import React from 'react';
import ReactDom from 'react-dom' 

class TodoForm extends React.Component {
   


    render(){
        return(
            <div>
                <input value={this.props.newTodo} onChange={this.props.changeHandler} />
            <button onClick={this.props.addTodo}>Add Todo</button>
            <button>Clear All</button>
            </div>

        )
    }
}

export default TodoForm 