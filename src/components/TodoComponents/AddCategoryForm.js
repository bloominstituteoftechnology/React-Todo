import React from 'react';

const AddCategoryForm = props => {
  return (
    <form onSubmit={props.addCategory}>
      <input
        type="text"
        name='categoryText'
        onChange={ (e) => props.handleChange(e) }
        value={props.categoryText}
        placeholder="Add Category"/>
      <button type="submit">+</button>
    </form>
  )
}

export default AddCategoryForm;