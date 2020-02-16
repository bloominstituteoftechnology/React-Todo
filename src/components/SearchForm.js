import React, { useState } from 'react'

const SearchForm = props => {
  const [query, setQuery] = useState('')

  const handleChanges = e => {
    setQuery(e.target.value)
    console.log(query)
  }

  const resetInputField = () => {
    setQuery('')
  }

  const submitSearch = e => {
    e.preventDefault()
    props.search(query)
    resetInputField()
  }

  return (
    <div>
      <form>
        <input
          className='search-bar'
          value={query}
          type='text'
          onChange={handleChanges}
          placeholder='Find ToDo'
        />
      </form>
    </div>
  )
}

export default SearchForm
