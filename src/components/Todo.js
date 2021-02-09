import { render } from '@testing-library/react';
import React from 'react';

class Todo extends React.Component {
    
    handleChange = (e) => {
        this.setState((e) => {
            newTodo: e.target.value
        })
    }
};

render() {
    return(
        <form>
            <input
            type= "text"
            name= 'todo'
            value= {this.state.newTodo}
            onChange={this.handleChanges}
            />
            <button>Add</button>
        </form>
        )
}

export default Todo;