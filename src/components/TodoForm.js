import React from 'react'


export class TodoForm extends React.Component {
    
    constructor() {
        super();
        this.state = {
            item: ""
        }
    }

    handleChanges = e => {
        this.setState({ item: e.target.value })
    }

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({ item: "" })
    }
    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                    placeholder="Add To Do"
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm
