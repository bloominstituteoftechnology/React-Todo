import React from 'react';

state = {
    todo: [
        {
            id: 1,
            text: 'This',
        },
        { 
            id: 2,
            text: 'That',
        },
        {
            id: 3,
            text: 'Other',
        }
    ],
    newToDo: '',
}

addNewToDo = (event) => {
event.preventDefault();
const todo = this.state.todo;
const newID = todo.length + 1;
const item = this.state.newToDo;
todo.push({id: newID, text: item});
this.setState({
    newToDo: '',
    todo: todo,
});
}

handleNewToDo = (event) => {
this.setState({newToDo: event.target.value});
}


render() {
return (
    <div>
        <ul>
            {this.state.todo.map(item => {
                return <Item key={item.id} item={item} />;
            })}
        </ul>
      
        <form onSubmit={this.addNewToDo}>
            <input type="text" onChange={this.handleNewToDo} value={this.state.newToDo} />
            <input type="submit" value="Submit New To Do Item to List" />
        </form>
    </div>
)
}
}

export default App;