import React from 'react';
import './TodoActions.css';

const TodoActions = ({ removeCompleted, removeAll, filter, setFilter }) => (
  <div>
    <div className="TodoActions">
      <div className="TodoActions__desc">FILTER:</div>
      <div className="TodoActions__radio-group">
        <input
          type="radio"
          className="TodoActions__radio-input"
          id="all"
          name="filter"
          checked={filter === 'all'}
          onClick={() => setFilter('all')}
        />
        <label for="all" className="TodoActions__radio-label">
          <span class="TodoActions__radio-button" />
          ALL
        </label>
      </div>

      <div className="TodoActions__radio-group">
        <input
          type="radio"
          className="TodoActions__radio-input"
          id="active"
          name="filter"
          checked={filter === 'active'}
          onClick={() => setFilter('active')}
        />
        <label for="active" className="TodoActions__radio-label">
          <span class="TodoActions__radio-button" />
          ACTIVE
        </label>
      </div>

      <div className="TodoActions__radio-group">
        <input
          type="radio"
          className="TodoActions__radio-input"
          id="completed"
          name="filter"
          checked={filter === 'completed'}
          onClick={() => setFilter('completed')}
        />
        <label for="completed" className="TodoActions__radio-label">
          <span class="TodoActions__radio-button" />
          COMPLETED
        </label>
      </div>
    </div>

    <div className="TodoActions">
      <div className="TodoActions__desc">REMOVE:</div>
      <button className="TodoActions__button" onClick={removeCompleted}>
        Remove completed
      </button>
      <button className="TodoActions__button" onClick={removeAll}>
        Remove all
      </button>
    </div>
  </div>
);

export default TodoActions;
