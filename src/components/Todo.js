import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        const {item,handleChange,handleSubmit} = this.props
        return (
            <div>
                <form>
                    <input type="text" placeholder="add a todo item" value={item} onChange={handleChange} onSubmit={handleSubmit}></input>
                    <button type="submit">add item</button>
                </form>
            </div>
        )
    }
}
