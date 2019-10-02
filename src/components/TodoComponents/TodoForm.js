import React from 'react';

class TodoForm extends React.Component {
constructor() {
    super()
    this.state = {
        value: ""
    };
}

handleChange = e => {
    this.setState({
        value: e.target.value
    });
};

handleSubmit = e => {
    e.preventDefault();

    this.props.addItem(e, this.state.value);
    this.setState({
        value: ""
    });
};

// render() {
//     return (
//         // <form onSubmit
//     )
// }

}

export default TodoForm;