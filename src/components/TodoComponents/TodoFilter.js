import React from 'react'

const TodoFilter = ({ handleChange, filterParam }) => (
  <input
    type="text"
    value={filterParam}
    placeholder="enter filter param"
    name="filterParam"
    onChange={handleChange}
  />
)

export default TodoFilter
