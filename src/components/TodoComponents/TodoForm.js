import React, { Component } from 'react'

export class TodoForm extends Component {
 state = {
   title: ''  
}
  
  render() {
    return (
      <form>
        <input 
        type="text" 
        name="title" 
        placeholder="Add Todo"
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
