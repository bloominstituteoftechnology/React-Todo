import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: ''
        }
    }

    //Adding event handler
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    submitItem = event => {
        event.preventDefault();
        this.props.addItem(this.state.item);
    }

render() {
    return (
        <form onSubmit={this.submitItem}>
        <input type="text" value={this.item} name="item" placeholder="Add Task" onChange={this.handleChange}/>
        <button>Add Task</button>
        </form>
        )
    }
}
export default TodoForm;