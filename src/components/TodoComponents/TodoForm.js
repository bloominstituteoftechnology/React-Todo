import React from 'react';
import { exportDefaultDeclaration } from '@babel/types';

class TodoForm extends React.Component {
  render(){
    return(
      <div>
        <h2>{this.state.message}</h2>
        <form onSubmit={this.handleChanges}>
          <label htmlFor="newTodo">New Todo</label>
          <input placeholder="New Todo" onChange={this.addTodo} id="newTodo" name="newTodo" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  };
}
export default TodoForm;