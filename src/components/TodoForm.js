import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            itemName: "",
        }
    }

    //update state with each keystroke
    handleChange = e => {
        this.setState({
            itemName: e.target.value
        })
    }

    //class property to submit form
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.itemName)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name="itemName" 
                value={this.state.itemName}
                onChange={this.handleChange}
                />
                <button>Add Todo Item</button>
            </form>
        )
    }
    

}

export default TodoForm