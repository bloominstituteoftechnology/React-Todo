import React from 'react';

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state = {
            newThing: ''
        };
    }



    render(){

        return(
            <form>
                <input
                 value={""}
                 onChange={""}
                 type="text"
                 name="todo"
                 
                 />
                 <button>Add Thing</button>
                 <button>Clear Thing</button>


            </form>
        )
    }






}



export default TodoForm;