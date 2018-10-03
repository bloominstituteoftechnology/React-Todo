// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return(
        <div>
        {props.todoData.map( item => {
    return <h1>{item.task}</h1>
        </div>
    )
}
