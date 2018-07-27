import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: true
    };
  }

  render() {
    const { onSubmit, onChange, value, placeholderText } = this.props;
    return (
      <form
        action="#"
        className="Todo__form"
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
          this.setState({ showButton: true });
        }}
      >
        {this.state.showButton ? (
          <button
            onClick={() => this.setState({ showButton: false })}
            className="App__button"
          >
            {placeholderText}
          </button>
        ) : (
          <input
            onChange={e => {
              onChange(e.target.value);
            }}
            value={value}
            type="text"
            className="Todo__input"
            placeholder={placeholderText}
          />
        )}
      </form>
    );
  }
}

export default TodoForm;
