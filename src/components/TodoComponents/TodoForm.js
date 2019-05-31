import React from 'react';
// import todoList from './TodoList'
class TodoForm extends React.Component {
  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      text: 'hello',
      completed: false
    
    };
    this.setState(
      {todoList: [...this.state.todoList, newTodo], }
    );
    console.log(setState);
  };
  render(){
    return(
      <div>
        <form onSubmit={this.addTodo}>
          <label placeholder="newTodo"></label>
          <input placeholder="New Todo" onChange={this.handleChange} id="newTodo" name="newTodo" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  };
}
export default TodoForm;