// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends
React.Component {
    render () {
        
var items =
this.props.items.map((item, index) =>
{

    return (
   <TodoListItem key={index}

   item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });

    
}
    }




export default TodoList;