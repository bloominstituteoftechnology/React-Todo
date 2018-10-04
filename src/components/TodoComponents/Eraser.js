import React from 'react';

const Eraser = props => {
  return (
          <div className='form-clear'>
            <button className='button' onClick={props.clearDone}><i className="fas fa-eraser"/> done</button>
          </div>
  )
}

export default Eraser; 
