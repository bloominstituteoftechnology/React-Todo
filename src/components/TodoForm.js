import React from 'react'


class ListForm extends React.Component{
    constructor(){
        super()
        this.state={
            input:''
        }
    }

handleChanges = e => {
    this.setState({
        input:e.target.value
    })
}

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.handleAddItem(this.state.input)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChanges} type="text" name="item"/>
                <button>Add</button>
            </form>
        )
    }
}

export default ListForm