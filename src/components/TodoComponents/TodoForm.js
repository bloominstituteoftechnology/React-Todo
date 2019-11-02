import React from 'react';
class TodoForm extends React.Component {

    handleChanges = e => {
      
    };
  
    render() {
      console.log('rendering form');

      return (
        <form>
          {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
          <input type="text" name="todo" />
          <button>Add</button>
        </form>
      );
    }
  }
  
  export default TodoForm;