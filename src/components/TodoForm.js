import React from "react";

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            itemName: " "
        };
    }

    //handleChanges
    handleChange = (e) => {
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
            <form>
                <input 
                type="text"
                name="item"
                onChange={this.handleChange}
                value={this.state.itemName}
                />
                <button>Add Task</button>
            </form>
        )
    }

}

export default TodoForm