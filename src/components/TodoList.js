// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Item from './Todo'

const List = (props) =>{

    return(   <div className = 'list'>
    {props.state.map(item =>{
        return(
            <Item 
            key= {item.id}
            item= {item}
            onComplete = {props.onComplete}
            />
        )
    })}

</div>
    );
 

};  

export default List