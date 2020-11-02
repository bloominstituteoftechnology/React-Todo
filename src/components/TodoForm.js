import React from "react"

class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            taskName: ""
        }
    }



    handleChanges = (e) => {
        this.setState({
            taskName: e.target.value
        })
    }


handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.taskName)
    this.setState({taskName: ""})
}

render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            name=""
            onChange={this.handleChanges}
            value={this.state.taskName}
            />
            <button>Add</button>
        </form>
    )
}
}

export default TodoForm