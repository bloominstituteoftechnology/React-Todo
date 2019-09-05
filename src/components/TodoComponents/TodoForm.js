import React from "react";


class ListForm extends React.Component {
    // Constructor with state
    constructor() {
        super();
        this.state = {
            itemName: ""
        };
    }
    handleChanges = e => {
        this.setState({ itemName: e.target.value });
    };

    handleSubmit = e => {
        this.props.addItem(e, this.state.itemName);
        this.setState({ itemName: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.state.itemName}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default ListForm;
