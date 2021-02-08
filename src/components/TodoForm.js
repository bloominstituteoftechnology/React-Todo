import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            inputValue: ''
        }
    }

    handleChanges = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddItem(this.state.inputValue);
        this.setState({
            inputValue:""
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                value={this.state.inputValue}
                type="text"
                name="task"
                placeholder="Write task here"
                onChange={this.handleChanges}
                 />
                 <button>Add</button>
            </form>  
        )       
    }
}
export default TodoForm;