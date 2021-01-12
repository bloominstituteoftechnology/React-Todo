import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }

    handleChange= (evt)=>{
        this.setState({
            inputValue: evt.target.value
        })
    }

    handleAdd = (evt) =>{
        evt.preventDefault();
        this.props.handleItemAdd(this.state.inputValue)
        this.setState({
            inputValue:''
        })
    }

    render() {
        return(
            <form onSubmit={this.handleAdd}>
                <input
                type='text'
                name='text'
                placeholder='add new Todo...'
                value={this.state.inputValue}
                onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        )
    }
}




export default TodoForm