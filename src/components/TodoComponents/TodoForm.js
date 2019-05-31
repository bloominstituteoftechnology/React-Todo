import React from 'react';
// import todoList from './TodoList'
class TodoForm extends React.Component {
  render(){
    return(
      <div>
        <form onSubmit={this.props.addTodo}>
          <label placeholder="newTodo"></label>
          <input 
            placeholder="New Todo" 
            onChange={this.props.changeHandler} 
            id="newTodo" 
            name="newTodo" 
            value={this.props.text}
            required
            />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  };
}
export default TodoForm;