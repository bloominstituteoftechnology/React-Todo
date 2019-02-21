// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import PropTypes from 'prop-types';


export class TodoList extends React.Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

 

  render() {
      const { id, title } = this.props.todo;
    return (
            <div style = {this.getStyle()}>
            <p> 
            <input type="checkbox" onChange = {this.props.markComplete.bind(this.id)} /> {''}
        { title } 
        </p>
      </div>
    )
  }
}

//PropTypes
TodoList.propTypes = {
    todo: PropTypes.object.isRequired
  }

export default TodoList
