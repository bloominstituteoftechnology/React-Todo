import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div>
        <div className='list-items'>
          {this.props.items.map(item => {
            return (
              <p className={item.completed ? 'completed' : 'to-be-completed'} onClick={this.props.toggleCompleted}>
                {item.task}
              </p>)
          })}
        </div>
      </div>
    )
  }
}
