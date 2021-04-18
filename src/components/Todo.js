import React from "react";

const Todo = (props) => {
  console.log(props, props.props.list);

  return (
    <div className="d-flex justify-content-center flex-column flex-wrap" style={{marginTop: '15vh', alignContent: 'start'}}>
      {props.props.list.map((item, idx) => {
        return (
          <div
            className="d-flex justify-content-center flex-column cards"
            key={idx}
          >
            <div
              onClick={() => props.props.toggleDone(props.props.list[idx].id)}
              key={idx}
            >
              <p
                className="display-4"
                style={{
                  color: `${
                    props.props.list[idx].completed === false
                      ? "lime"
                      : "#444"
                  }`,
                  textDecoration: `${
                    props.props.list[idx].completed === false
                      ? "none"
                      : "line-through"
                  }`,
                  textShadow: `${
                    props.props.list[idx].completed === false
                      ? "none"
                      : "0 0 1rem lime"
                  }`,
                }}
              >
                {props.props.list[idx].task}
              </p>
            </div>
            <div
              onClick={() => props.props.clearTodo()}
              style={{
                padding: "4vh 3vw",
                border: "2px solid white",
                backgroundColor: "#444",
                opacity: "0.7",
              }}
            >
              <em>Mission: Completed</em>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
