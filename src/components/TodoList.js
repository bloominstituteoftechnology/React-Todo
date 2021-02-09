// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
            <div>
            <h1>Here is what you need to get done: </h1>
            {this.props.listItems.map((todoItem)=>(
                <Todo key={todoItem.id} todoItem={todoItem} toggleItemCompleted={this.props.toggleItemCompleted}/>
                )  
            )}
        </div>
        )
    }
}


// const TodoList = (props) => {
//     console.log('props inside TodoList:',props);
//     return (
//         <div>
//             <h1>Here is what you need to get done: </h1>
//             {props.listItems.map((todoItem)=>(
//                 <Todo key={todoItem.id} todoItem={todoItem} toggleItemCompleted={props.toggleItemCompleted}/>
//                 )  
//             )}
//         </div>
//     )
// };

export default TodoList;