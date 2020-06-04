import React from 'react';

class TodoForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        item: ''
      };
    }
    
    // handle changes here also
    handleChanges = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    // submit item
    submitItem = e => {
      e.preventDefault(); // also saw this on app.js clear purchased, why?
      this.setState({ item: '' });
      this.props.addItem(e, this.state.item);
    };
  
    render() {
      console.log('rendering...');
      return (
        <form onSubmit={this.submitItem}>
        <label htmlFor='addTask'>Add task:</label>
          <input
            type='text'
            id='addTask'
            name='item'
            placeholder='Add a new task...'
            value={this.state.item}
            onChange={this.handleChanges}
          />
          <button type='submit' className='submitTask'>Add task to list</button>
        </form>
      );
    }
  }
  
  export default TodoForm;
  