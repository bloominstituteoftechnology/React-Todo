import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state={
            item: ''
        }

        console.log(props)

    }

    changeHand =(e) =>{
    this.setState({

            item: e.target.value})
    }
    subHand = (e) =>{
        e.preventDefault();
        this.props.newTodo(this.state.item)
        this.setState({item: ''})

    }

    render() {
        return (
            <div>
             <form onSubmit={this.subHand}>
                 <input type="text" onChange={this.changeHand} value={this.state.item} />
                 <input type="button" onClick={() => {this.props.clear()}} value="Clear todos" />
                 <input type="submit" value="submit" />


             </form>
            </div>
        )
    }
}