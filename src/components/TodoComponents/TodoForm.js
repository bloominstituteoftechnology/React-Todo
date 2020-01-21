import React from 'react';

class TodoForm extends React.Component {
    constructor () {
        super();
        this.state = {
            newItem: ""
        };
    }

    handleChanges = event => {
        this.setState({ ...this.state, newItem: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewItem(this.state.newItem);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                onChange={this.handleChanges}
                value={this.state.newItem}
                type="text"
                name="item"
                 />
                 <button>add</button>
            </form>
        
        );
    }
}

export default TodoForm;