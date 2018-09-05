import React, { Component } from 'react';
import './Todo.css'

class TodoForm extends Component {
    constructor(props)  {
        super(props)
        this.state = [{textInput: ''}
            
          ];
    }

handleNewTask = event =>
    this.setState({value: event.target.textInput}
    );




    render() { 
        //alert(this.state.value);

        return (
        
    <form>
        <input onChange={this.handleNewTask} type="text" placeholder='...todo' value={this.state.value}  />
    
        <input onSubmit='' type="submit" value="Add Todo" />
        <input onSubmit='' type="submit" value="Clear Completed" />
    </form>
        );
    }
}
 
export default TodoForm;