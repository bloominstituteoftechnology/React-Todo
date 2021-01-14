import React from 'react';

class TodoForm extends React.Component {
    constructor(){
      super();
      
    }

    render(){
        return(
            <form>
            <input type='text' name='item' placeholder='ToDo Form' />
            <button>Add Me!</button>
            </form>
        )
    }
}

export default TodoForm;