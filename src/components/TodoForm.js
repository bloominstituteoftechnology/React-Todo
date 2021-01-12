import React from 'react'
class TodoForm extends React.Component {


addToList = () => {
    console.log("test")
    this.setState({})
}

    render () {
        return (
            <div>
                <input 
                    placeholder="Add New Item"
                />
                <button 
                    onClick={this.addToList}
                >
                    Submit
                </button>
            </div>
        )
    }
}
export default TodoForm