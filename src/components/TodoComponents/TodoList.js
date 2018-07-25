// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
// import Todo from './Todo';
// import taskArr from './taskArr';



// class TodoList extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         todo: taskArr,
//       }
//     }
//     handleAddTask = (event)=>{
//         const tasks = this.state.todo.slice();
//         if (event.key === 'Enter') {
//             console.log(tasks);
//             tasks.push({
//                 task: event.target.value,
//                 id: Date.now(),
//                 completed: false
//             });
//             this.setState({todo: tasks});
//         }
//     };
//     render() {
//       return (
//         <div className="todo">
//           <Todo />
//           {/* <input placeholder="capture" onKeyPress={this.handleAddTask} /> */}
//         </div>
//       )
//     };
//   }

  export default TodoList;