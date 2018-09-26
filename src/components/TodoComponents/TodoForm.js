import React from "react";
import ReactDOM from "react-dom";


const input = <input></input> ;

class TodoForm extends React.Component {

    
    constructor(){
        super();
        this.state = {
            text: 'A WILD STRING APPEARED!',
        }
    
    
    }

        return(
            <div>
                <input text={this.state.text}></input>
            </div>
        )
}

export default TodoForm ;