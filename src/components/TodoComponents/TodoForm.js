import React from 'react';

class TodoForm extends React.Component { 

    constructor() {
        super();
        this.state = {
          todoText: ''
        };
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState({
          todoText: e.target.value
        });
      };
    
      // class property to submit form
      handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
      };


    render() {

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="todo"
                        value={this.state.todoText}
                        onChange={this.handleChanges}
                    />
                    <button>Add</button>
                </form>
            </div>

        )
    }

}

export default TodoForm;