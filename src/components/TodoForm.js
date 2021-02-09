import { render } from '@testing-library/react';
import React from 'react';

class TodoForm extends React.Component {
    
    handleChanges = (e) => {
        this.setState((e) => {
            newTodo: e.target.value
        })
    };


render() {
    return(
        <form>
            <input
            type= "text"
            name= 'todo'
            value= {this.state.newTodo}
            onChange={this.handleChanges}
            placeholder= "Enter a task here."
            />
            <button>Add</button>
        </form>
        );
}
};
export default TodoForm;