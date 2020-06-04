import React from 'react';

class TodoForm extends React.Component {
    
    render() {
      console.log('rendering...');

      return (
        <form onSubmit={this.props.onSubmit}>
        <label htmlFor='addTask'>Add task:</label>
            <input
                type='text'
                id='addTask'
                name='name'
                placeholder='Add a new task...'
                value={this.props.formState.name}  // this.state.form on app.js
                onChange={this.props.onChange}
            />
          <button type='submit' className='submitTask'>Add task to list</button>

          <button className="clear-btn" onClick={this.props.clearCompleted}>
            Clear Completed
          </button>
        </form>
      );
    }
  }
  
  export default TodoForm;
  