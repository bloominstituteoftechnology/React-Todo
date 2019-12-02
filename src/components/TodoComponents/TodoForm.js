import React from 'react';



class TodoForm extends React.Component{

    render(){
        return(
            <div>
                <form>
                     <input type='text'placeholder=''/>
                     <button type='submit' >Add to to do list.</button>
                     <button type='reset'>clear completed items</button>
                </form>
             </div>
        )
    }
}
export default TodoForm