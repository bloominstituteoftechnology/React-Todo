import React from 'react'
class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: ""
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefaul()
        this.setState({
            newTask: ""
        })
        this.props.handleSubmit(e, this.state.newTask)
    }

    render () {
        return (
            <div>
                <form 
                    onSubmit={this.handleSubmit}
                >
                    <input 
                        value={this.state.newTask}
                        name="newTask"
                        placeholder="Add New Item"
                        onChange={this.handleInput}
                    />
                    <button 
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                <button 
                    onclick={this.props.clearCompleted}
                >
                    Clear
                </button>
            </div>
        )
    }
}
export default TodoForm