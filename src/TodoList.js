import React, { Component } from 'react'
import Todo from './Todo';
import './styles.css'

export default class List extends Component {

  render() {
    return (
      <div>
        <div className='list-container'>
          {this.props.items.map(item => (
            <Todo toggleCompleted={this.props.toggleCompleted} key={item.id} item={item} />
          ))}
        </div>

      </div>
    )
  }
}
