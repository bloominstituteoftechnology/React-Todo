// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

// class TodoList extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     fullList: null
//         // };
//     }
//     render() {
//         return (
//             <div>
//             Hello from TodoList!
//             {props.fullList.val1}
//         {/* fullList.map(() => {
//           <Todo />  }) */}
//             {/* {Here, I'll map over every object within the array, display ToDo for every one.} */}
//             </div>
//         )
//     }
// }


const TodoList = props => {
        return (
            <div>
            Hello from TodoList!
            {props.fullList.val1}
        {/* fullList.map(() => {
          <Todo />  }) */}
            {/* {Here, I'll map over every object within the array, display ToDo for every one.} */}
            </div>
        )
}


export default TodoList;