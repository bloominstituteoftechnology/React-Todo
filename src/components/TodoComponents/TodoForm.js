import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.InitialState = {};
        this.state = this.InitialState
    }
    handleAdd = event => {
        const {item, value} = event.target
        this.setState({
            [item]: value,
        })
    }
    submitAdd = () => {
        this.props.addListItem(this.state)
        this.setState(this.initialState)
    }

    submitClearAll = () => {
        this.props.clearItems(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {item} = this.state;
        return(
            <form>
                <label>New Item: </label>
                <input type="text" value={item} />
                <input type="button" value="Submit" onClick={this.submitAdd} />
                <input type="button" value="Clear All Items" onClick={this.submitClearAll} />
            </form>
        )
    }
}

export default TodoForm