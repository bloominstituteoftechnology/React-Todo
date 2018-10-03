// here is the start for PR purposes
// import React from 'React';

// const Todo = props => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Todo;

import React from "react";
import { isRegExp } from "util";

const Todo = (props) => {
	return <div>{props.todo}</div>;
	// crossout={props.todo ? { textDecoration: 'line-through'} :null};
	// onclick={() =>  }
};

export default Todo;