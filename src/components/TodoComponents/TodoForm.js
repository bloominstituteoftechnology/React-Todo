import React, { Fragment } from 'react'
import './Todo.css'

const TodoForm = ({
  handleChange,
  handleSubmit,
  removeCompletedTodos,
  value
}) => (
  <Fragment>
    <h1 className="title">Get after it!</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="enter todo here"
      />
      <button type="submit">add todo</button>
    </form>

    <button type="submit" onClick={removeCompletedTodos}>
      clear completed
    </button>
  </Fragment>
)

export default TodoForm
