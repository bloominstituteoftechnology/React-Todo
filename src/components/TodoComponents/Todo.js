import React from 'react'



class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
      }

      toggleStrike(event) {
          event.target.classList.add('strike-th');
    
      }
     
      render() {
        return (
            <ul>
                <li onClick={this.handleClick && this.toggleStrike} >
                    {this.props.value}
                </li>
            </ul>
    );
}
}

export default Todo