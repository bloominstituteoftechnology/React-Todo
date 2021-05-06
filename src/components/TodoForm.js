import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            task: '',
            id: Date.now(),
            completed: false
        }
        
    }
    render() {
        return (
            <form>
                <input placeholder="...todo" onChange={this.props.updateListInput}></input>
                <button onClick={this.props.submitListItem}>Go!</button>
            </form>
        )
    }
}

export default TodoForm;