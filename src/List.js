import React, { Component } from 'react'
import Item from './Item';
import './styles.css'

export default class List extends Component {

  render() {
    return (
      <div>
        <div className='list-container'>
          {this.props.items.map(item => (
            <Item toggleCompleted={this.props.toggleCompleted} key={item.id} item={item} />
          ))}
        </div>

      </div>
    )
  }
}
