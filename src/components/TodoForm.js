import React from 'react'

class TodoForm extends React.Component {
  constructor () {
    super()
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
    if (this.state.task !== '') {
      this.props.addItem(this.state.task)
      this.setState({
        task: ''
      })
    }
  }

  render () {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type='text'
          name='task'
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <button type='submit'>Add</button>
        <button onClick={this.props.clearCompleted}>Clear</button>
      </form>
    )
  }
}

export default TodoForm
