import React from 'react'

class TodoForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      task: ''
    }
  }

  changeHandler = e => {
    this.setState({
      task: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.props)
    this.props.addItem(this.state.task)
    this.setState({
      task: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type='text'
          name='task'
          value={this.state.task}
          onChange={this.changeHandler}
          placeholder='Add ToDo'
        />
        <button type='submit'>Add</button>
        <button onClick={this.props.clearCompleted}>Clear</button>
      </form>
    )
  }
}

export default TodoForm
