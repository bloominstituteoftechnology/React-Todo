import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
           {this.props.groceries.map(todo => (
               <Todo 
               id={todo.id.Date()}
               todo={todo}
               toggleCompleted={this.props.toggleCompleted} />
           ))} 
        )
    }
}


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
