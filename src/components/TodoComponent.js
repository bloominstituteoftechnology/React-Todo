import React, { Component } from 'react';

class TodoComponent extends Component {
        
    render() {
        const item_props = this.props.TodoItem;

        return (      
            <tr>
                <td id={item_props.Id} style={item_props.ClassStyle}>
                    <h3>{item_props.Title}</h3>
                    <button onClick={ item_props.deleteHandler }> Delete</button>
                    <button onClick={ item_props.finishedHandler }> Finished</button>                                  
                </td>
            </tr>                      
        );
    }
}

export default TodoComponent;