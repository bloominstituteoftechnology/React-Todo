import React from 'react';


/*class goal {
    constructor(intent)
    {   
        this.id=Math.random()*100;
        this.innerHTML=intent;  
    }
}
*/

const TodoForm = props => {
    return (
    <div>
        <form className="form">
            <input className="goalitem" type="text" placeholder="What is your goal?"/>
            <input type="submit" value="Submit"/>
        </form> 
        
        <div className="buttons">

        </div>
    </div>
    )
}   

export default TodoForm;