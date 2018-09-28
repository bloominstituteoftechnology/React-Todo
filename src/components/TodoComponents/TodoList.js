import React from 'react';
import ReactDom from 'react-dom' 
import Todo from './Todo'


class TodoList extends React.Component {
    render(){
        return(
            <div>

                {this.props.todos.map(todo =>{
                    {/* Here, the todos array is passed in from top-level state.      Because it's an array, it has accessvto the .map()            method. It is being passed a single todo object from the      array as an argument/parameter. .map() is useful because it returns an array, allowing us to change state without altering it directly.
                    
                     */}
                   return <Todo  key={todo.id} handleClick={this.props.handleClick} todo={todo} />

                        // The Todo child component, being mapped over, is being giving a key, which helps React identify which array items should be changed. This is particularly important here because since the array item is an object, it has keys which can be targeted. It is also being passed the handleClick function from top-level state as a prop. It is also given a todo prop, which is passed the value of the todo item received by the .map() method.


                })}
            </div>
        )
    }
}

export default TodoList