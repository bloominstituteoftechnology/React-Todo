import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super()
        this.state ={
            inputValue:""
        }
    }

    handleChange = e => {
        this.setState({inputValue:e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.inputValue)
    }

    

    render() {
      
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name="todo"
                placeholder="Todo..."
                onChange={this.handleChange}/>
                <button>
                    Add Todo
                </button>
            </form>
        </div>
        )
       
    }
}

export default TodoForm