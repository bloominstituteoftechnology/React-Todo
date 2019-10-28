import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = { 
            newTodo: ""
        }
    }

    handleChanges = e => {
        console.log('Handle Change Working')
        this.setState({
            newTodo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Submit Works')
        this.props.addTodo(this.state.newTodo);
    }
    render(){
        console.log('working on form')
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    id="item"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />
                <button>Add It!</button>
            </form>
        )
    }
}

export default TodoForm;