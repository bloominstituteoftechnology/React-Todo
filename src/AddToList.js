import React from 'react';

const AddToList = (props) => {
    return (
        <div>
            <form>
                <input className="input" type="text" placeholder="Add To List" onBlur={props.handleChange}/>
                <button
                    type="submit"
                    className="btn-add"
                    onClick={props.handleClick}
                >Add
                </button>
            </form>
        </div>
    );
};

export default AddToList;