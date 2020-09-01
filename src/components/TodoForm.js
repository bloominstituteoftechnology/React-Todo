import React from 'react'
import { render } from '@testing-library/react';
class TodoForm extends React.Component {
    constructor(props){
        super();
        this.state = {
            task:'',
            id:Date.now(),
            completed:false,
        };
    }

    handleChange = e => {
        const name= e.target.name
        const value = e.target.value
        this.setState({task:value } )
      }

      handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.task);
    
        this.setState({
            task:""
        });
    };
  


    render() {


return( 
    <form onSubmit = {this.handleSubmit}>
    <input
    autocomplete="off"
    type="text"
    placeholder ="Add Todo"
    onChange={this.handleChange}
    value={this.state.task}
    name="task"
    >
    
    </input>
    <button>Add Todo</button>
</form>
)
  
} 

}

export default TodoForm