import React from 'react';

export default ({ ToDos }) => { // Export an annonymous function that takes in the ToDos we have and displays them in a list.

    const clickHandler = (item) => {
      item.completed = !item.completed;
      const checkbox = document.getElementById(`${item.text}checkbox`);
      const text = document.getElementById(`${item.text}`);
      if (item.completed) {
        checkbox.checked = true;
        text.classList.add('crossed');
        console.log(`'${item.text}' marked done.`);
      } else {
        checkbox.checked = false;
        text.classList.remove('crossed');
        console.log(`'${item.text}' marked not done.`)
      }
    };

    return ( // Any time you want to use JavaScript inside JSX wrap in {}.
      <ul>
        {ToDos.map((ToDo, i) => { // For each value inside ToDos TODO why map instead of forEach?
            return (
              <li key={i} id={ToDo.text} onClick={clickHandler.bind(null, ToDo)}>
                <input id={`${ToDo.text}checkbox`} type="checkbox"/>
                {ToDo.text}
              </li> // Return a list item of the ToDo with a key of the index so that it stays in order of addition.
            )
        })}
      </ul>
    );
}
