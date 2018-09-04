import React, { Component } from 'react';
import './Todo.css'

class TodoForm extends Component {
    constructor(props)  {
        super(props)
        this.state = [{value: ''}
            
          ];
    }

handleChange = event =>
    this.setState({value: event.target.value});

handleSubmit = event => (
    alert(this.state.value)
  ) ;


    render() { 
        return (<React.Fragment>
    <form onSubmit={this.handleSubmit}>
        
        
        <input type="text" placeholder='...todo' value={this.state.value} onChange={this.handleChange} />
    
        <input type="submit" value="Add Todo" />
        <input type="submit" value="Clear Completed" />
    </form>
        </React.Fragment> );
    }
}
 
export default TodoForm;