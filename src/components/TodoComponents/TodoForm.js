import React, { Fragment } from 'react'

const TodoForm = ({ handleChange, handleSubmit, value }) => (
  <Fragment>
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">add todo</button>
    </form>

    <button type="clear completed">clear completed</button>
  </Fragment>
)

export default TodoForm
