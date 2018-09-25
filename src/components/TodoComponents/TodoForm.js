import React from 'react';

const Form = (props) => {
    return (
        <div>
            <input onChange={this.handleInput} />
            <button>Add todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

// class Form extends App {
//     constructor(){
//         super();
//     }
//     render(){
//         return(
//             <div>
                // <input onChange={this.handleInput} />
                // <button>Add todo</button>
                // <button>Clear Completed</button>
//             </div>
//         )
//     }
// }

export default Form;