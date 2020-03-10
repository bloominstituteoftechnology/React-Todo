import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
    constructor(props){
        super(props)
        
    }
  

    render(){
        return(
            <div>
                {this.props.todos.map(todo => {
                    return(
                    <Todo 
                    key={todo.id}
                    todo={todo}
                    toggleCompleted={this.props.toggleCompleted} />
                )})} 
           </div>
        )
        
        }
}

export default TodoList
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


// ender(){
//     return(
//         <div>
//        {this.props.todos.map(todo => {
//            <Todo 
//            id={todo.id.Date()}
//            todo={todo}
//            toggleCompleted={this.props.toggleCompleted} />
//        })} 
//        </div>
//     )
    
// }