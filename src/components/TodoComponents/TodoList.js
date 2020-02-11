// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from './Item';

class TodoList extends React.Component {
    constructor(){
        super();
    }


    render(){
        return(
            <div >
                {this.props.currentList.map(item => (                    
                    <Item 
                        item = { item }
                        key={ item.id } 
                        toggleTodo={ this.props.toggleTodo } />                    
                ))}
                

                <button 
                onClick={ this.props.removeCompletedTodo } >
                 Remove Done!
                </button>
            </div>
        )
    }
}

export default TodoList;