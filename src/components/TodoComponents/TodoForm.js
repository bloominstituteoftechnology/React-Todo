import React from 'react';

const Todoform  = (props) =>{
    
    
    return(
        <div>
        <form>
          <input type="text" onChange={props.value} />
          <input type="submit" value="Submit" onClick={props.submit} />
        </form>
        </div>
    )
}

export default Todoform;