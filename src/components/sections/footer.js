import React from 'react';

function Footer({ leftTodos, todos, setTodos, setFilteredTodos, setStatus, status }) {
  const clearCompleted = () => {
    setTodos(todos.filter(todo => todo.completed !== true));
  }

  const getCompletedTodos = () => {
    setStatus('completedTodos');
  }

  const getActiveTodos = () => {
    setStatus('actives');
  }

  const getAllTodos = () => {
    setStatus('all');
  }

  return (
    <div>
        <footer className="footer">
          <span className="todo-count">
            <strong>{leftTodos} </strong>
              items left
          </span>

          <ul className="filters">
            <li>
              <a className={status === 'all' ? "selected" : null} onClick={getAllTodos}>All</a>
            </li>
            <li>
              <a className={status === 'actives' ? "selected" : null} onClick={getActiveTodos}>Active</a>
            </li>
            <li>
              <a className={status === 'completedTodos' ? "selected" : null} onClick={getCompletedTodos}>Completed</a>
            </li>
          </ul>

          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        </footer>
    </div>
)
}

export default Footer;
