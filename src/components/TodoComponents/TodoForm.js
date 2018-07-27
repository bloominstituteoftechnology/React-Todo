import React from 'react';

const TodoForm = props => {
  return (
    <div className='form-container'>
      <div className='input-container'>
        <input className='input' onKeyPress={e => {if (e.charCode === 13) {
          props.submit();
        }}} placeholder='To Do...' onChange={props.onchange} />
        <button className='submit' onClick={props.submit}>Submit</button>
      </div>

      <div className='search-container'>
        <input className='search' onKeyPress={e => {if (e.charCode === 13) {
          props.submitSearch();
        }}} placeholder='search' onChange={props.onchangeSearch} />
        <button className='submit-search' onClick={props.submitSearch}>Submit</button>
      </div>

      <div className='clears'>
        <button className='clear-complete' onClick={props.clearComplete}>Clear Completed Tasks</button>
        <button className='clear-all' onClick={props.annihilate}>Clear All</button>
      </div>
    </div>
  )
}

export default TodoForm;
