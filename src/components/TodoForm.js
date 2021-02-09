import React from 'react';

// add material ui for styling later

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTodoName: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            newTodoName: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleItemAdd(this.state.newTodoName);
        this.setState({
            newTodoName: "", // once you add item, clear state
        })
    }



    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
            <input 
                type="text"
                placeholder="type your next todo here"
                name="item"
                value={this.state.newTodoName}
                onChange={this.handleChange}
            />
            <button>Add to your Todo List!</button>
            </form>
        )
    }
    
}

export default TodoForm;