import React from "react";


class TodoForm extends React.Component {
    state = {
        item: ""
    };

    handleChanges = (e) => {
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type= "text"
                name= "item"
                value= {this.state.item}
                onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;

