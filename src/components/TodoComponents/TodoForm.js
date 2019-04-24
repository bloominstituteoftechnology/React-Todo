import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.InitialState = {};
        this.state = this.InitialState
    }

    render() {
        const {item} = this.state;
        return(
            <form>
                <label>New Item: </label>
                <input type="text" value={item} />
            </form>
        )
    }
}

export default TodoForm