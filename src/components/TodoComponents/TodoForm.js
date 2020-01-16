import React from 'react';

class TodoForm extends React.Component {
   constructor() {
      super();
      this.state = {
         newTodo: ''
      }
   }

   handleChanges = e => {
      this.setState({
         ...this.state,
         newTodo: e.target.value
      })
   }
   
   handleSubmit = e => {
      e.preventDefault();
      this.props.addNewTodo(this.state.newTodo);
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <input
               type='text'
               name='todo'
               onChange={this.handleChanges}
               value={this.state.newTodo}
            />  
            <button>Add</button> 
         </form>
      )
   }
}

export default TodoForm;