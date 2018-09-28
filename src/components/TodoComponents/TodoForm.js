import React from 'react';
import ReactDom from 'react-dom' 
import './Todo.css'
class TodoForm extends React.Component {
   


    render(){
        return(
            <div className='todoFormDiv'>
            <div>
                <input value={this.props.newTodo} onChange={this.props.changeHandler} />

                {/* This input button is given a value prop, in order to inform react on what should be        rendered within it. newTodo is an empty string, allowing for the input form to only render text that the user has put in, which is also handled by the onChange. onChange is an attribute for input elements, which can be set to a function, which will handle the logic for what is done on change. The function changeHandler is being passed down as a prop from top-level source.

                
                 */}
            <button onClick={this.props.addTodo}>Add Todo</button>

            {/* This onClick attribute is being passed the addTodo function from top-level state.
            
            
             */}
            </div>
                <div>  <button onClick={this.props.clearAll}>Clear All</button>
                
                
                {/* This onClick attribute is being passed the clearAll function from top-level state. */}
                
                <span>Click with caution!</span></div>
          
            </div>

        )
    }
}

export default TodoForm 