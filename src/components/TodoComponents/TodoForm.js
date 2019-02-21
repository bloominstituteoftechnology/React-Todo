import React, { Component } from 'react'

export class TodoForm extends Component {
 state = {
   title: ''  
}

onSubmit = (e) => {
  e.preventDefault();
  this.props.TodoForm(this.state.title);
  this.setState({ title: ''});
}


onChange = (e) => this.setState({ [e.target.name]: e.target.value});


  
  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <input 
        type="text" 
        name="title" 
        placeholder="Add Todo"
        value={this.state.title}
        onChange={this.onChange}
        />

        <input type="submit" 
        value="Submit"
        className="btn"
        /> 
        
      </form>


    )
  }

}

export default TodoForm
