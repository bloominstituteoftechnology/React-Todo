import React from 'react';
import './TodoInput.css';



export default class TodoInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }  

  addTodo(Todo) {
    if (Todo.length > 0) { 
    this.props.addTodo(Todo);
    this.setState({value: ''});
  }
  }

render () {
  return (
    <div>
      <input type="text" value={this.state.value} onChange={this.handleChange} /> 
      <button className="btn btn-primary" onClick={()=> this.addTodo(this.state.value)}>Submit
      </button>
</div> 
  );    
  }
}