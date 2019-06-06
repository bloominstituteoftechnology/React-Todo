import React from 'react'

const TodoSearch = props => {
  return (
    <form>
      <input className='todo-search' placeholder='Search...' name='searchText' type="text" value={props.searchText} onChange={props.handleInput}/>
    </form>
  )
}

export default TodoSearch;