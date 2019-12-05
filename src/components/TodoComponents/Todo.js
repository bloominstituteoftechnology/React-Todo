import React from 'react';

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemsToDo: [  {
                task: 'Organize Garage',
                id: 1528817077286,
                completed: false
              },
              {
                task: 'Bake Cookies',
                id: 1528817084358,
                completed: false
              }]
        };
    }

    deleteItem(itemId){
        const deleteIndex = this.state.itemsToDo.findIndex(item => item.id === itemId);
        this.setState({itemsToDo: this.state.itemsToDo.filter((item, index) => index !== deleteIndex)});
    }

    render() {
        return (
            <div>
                {this.state.itemsToDo && this.state.itemsToDo.map(toDoItem => {
                    return <li key={toDoItem.id}><span>{toDoItem.task}</span></li>
                })}
            </div>
        );
    }
}

export default ToDoList;