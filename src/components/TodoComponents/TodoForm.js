import React from 'react'

export default class TodoForm extends React.Component{

    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    OnSubmit = event => {
        event.preventDefault()
        this.props.addItem(this.state.item)
    }

    render() {
        return (
            <form onSubmit = {this.OnSubmit}>

                <input type="text" value={this.item} name="item" onChange={this.handleChanges}/>
                <button>Add Item</button>

            </form>
        )
    }

}