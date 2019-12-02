import React from "react"

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newObj: ""
        }
    }

    handleChanges = e => {
        this.setState({
            newObj: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addObj(this.state.newObj);
        this.setState({
            newItem: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="Obj" onChange={this.handleChanges} value={this.state.newObj} placeholder='Add Objective' ></input>
                <button>Add</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;