import React from 'react';

const TodoForm = props =>

<form>
<label>
  Name:
  <input type="text" name="name" />
</label>
<input type="submit" value="Submit" />
</form>

  // input field      //aqui value y handleChange
  // todo button     //aqui handleSubmit
  // clear completed button   //aqui supongo que solo handle click

export default TodoForm
