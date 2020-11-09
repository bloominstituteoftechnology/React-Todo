import React from "react";

class TodoForm extends React.Component {

    constructor(props) {
        super();
        
        this.state = {
            itemName: " "
        };
    }

    //handleChanges
    handleChanges = (e) => {
        this.setState({
            itemName: e.target.value
        })
    };

    //handleSubmit
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addItem(this.state.itemName);
        this.setState({ itemName: ""})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                name="item"
                onChange={this.handleChanges}
                value={this.state.itemName}
                />
                <button>Add Task</button>
            </form>
        )
    }

}

export default TodoForm