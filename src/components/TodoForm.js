import React, { Component } from 'react'

export default class TodoForm extends Component {
    render() {
        const {title} = this.props
        return (
           <li>
               <h6>{title}</h6>
               
           </li>
        )
    }
}
