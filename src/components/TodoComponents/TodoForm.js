import React from 'react';
import './Todo.css';

const Todoform  = (props) =>{
    
    
    return(
        <div className="formdiv">
        <form>
          <input type="text" onChange={props.value} />
          <input type="submit" value="Submit" onClick={props.submit} />
          <input type="submit" value="Clear All" onClick={props.cleared} />
        </form>
        </div>
    )
}

export default Todoform;