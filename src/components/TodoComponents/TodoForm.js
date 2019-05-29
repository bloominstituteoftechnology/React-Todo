import React from 'react';

class Todo extends React.Component {
  render(){
    return(
      <div>
        <h2>{this.state.message}</h2>
        <form onSubmit={(event) => this.handleChanges()}>
          <label htmlFor="newTodo">New Todo</label>
          <input placeholder="New Todo" onChange={(event) => this.newTodo()} id="newTodo" name="newTodo" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  };
}