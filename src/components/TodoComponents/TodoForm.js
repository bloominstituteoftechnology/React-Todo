import React from 'react';

class TodoForm extends React.Component {
  render(){
    return(
      <div>
        <form onSubmit={this.props.addTodo}>
          <label placeholder="newTodo"></label>
          <input 
            placeholder="Insert New Task" 
            onChange={this.props.changeHandler} 
            task="newTodo" 
            name="newTodo" 
            value={this.props.text}
            required
            />
          <button type="submit">Add Task To List</button>
        </form>
      </div>
    );
  };
}
export default TodoForm;