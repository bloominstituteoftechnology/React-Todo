import React from 'react';


export default class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newItem:''
        }
    }

    handleChanges = e => {
        this.setState({
            newItem:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.newItem)
        this.setState({newItem:''})
    }

    handleClear= e =>{
        e.preventDefault()
        e.stopPropagation()
        this.props.clearItems()
    }

    render(){
        return(
            <div className= 'form'>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter List Item" onChange={this.handleChanges} value={this.state.newItem}/>
                    <button>Submit</button>
                    <button onClick={this.handleClear}>Clear</button>
                </form>
            </div>
        )
    }

}