import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemText: ''
        }
    }
    handleChanges = e => {
        this.setState({
            itemText: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({
            itemText: ''
        })
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input
                type = 'text'
                name = 'item'
                value = {this.state.itemText}
                onChange = {this.handleChanges}/>
                <button>Add New</button>
            </form>
        )
    }
}
export default TodoForm