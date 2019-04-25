import React from 'react';
//////////////////////////////////////
// CODE FROM TUTORIAL

class Todo extends React.Component {

    createTasks = item => {
        return <li key={item.key} onClick={() => this.props.completeItem(item)} > {item.text} </li>
    }
    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return (
            <div>
                <ul className="theList">{listItems}</ul>
            </div>
            
        )
        
    }
}


export default Todo

// 