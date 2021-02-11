//import React
import React from 'react'


class TodoForm extends React.Component {

    constructor(){
        super();
        this.state = {
            item: ''
        }
    }

    handleChanges = e => {
        this.setState({item: e.target.value})
    };
    //submits new task, pulls in addItem function from top level
    submitTask = e => {
        e.preventDefault();
        this.setState({item: ''});
        this.props.addItem(this.state.item, e)
        
    }

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input 
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />

                <button>Add Item</button>
            </form>
            
        )
    }
}
export default TodoForm;