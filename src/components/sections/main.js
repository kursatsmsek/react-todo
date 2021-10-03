import React from 'react';
function Main({ todos, setTodos }) {
  const removeTodo = (event) => {
    console.log(event);
    const newTodoList = todos.filter((todo) => todo.id !== event);
    setTodos(newTodoList);
  }

  const completeTodo = (event) => {
    console.log(event);
    setTodos(todos.map(todo => {
      if (todo.id === event) {
        return { ...todo, completed:!todo.completed };
      }
      return todo;
    }))
  }

  const completeTodos = () => {
    console.log("vfd");
    setTodos(todos.map(todo => {
      if (!todo.completed) {
        return { ...todo, completed:true};
      }
      return todo;
    }))
  }

  return (
    <div>
        <section className="main">
          <input className="toggle-all" type="checkbox"/>
          <label htmlFor="toggle-all" onClick={() => {
            completeTodos();
          }} >
            Mark all as complete
          </label>

          <ul className="todo-list">
            {
              todos.map((todo, index) => (
                (todo.completed) ?
                <li key={index} className="completed">
                  <div className="view">
                    <input className="toggle" type="checkbox" onChange={() => {  
                      completeTodo(todo.id);
                    }} checked/>
                    <label>{todo.text}</label>
                    <button className="destroy" onClick={() => {
                      removeTodo(todo.id);
                    }}></button>
                  </div>
                </li>
                :
                <li key={index}>
                  <div className="view">
                    <input className="toggle" type="checkbox" 
                    checked={todo.completed ? todo.completed : false}
                    onChange={() => {
                      completeTodo(todo.id);
                    }} />
                    <label>{todo.text}</label>
                    <button className="destroy" onClick={() => {
                      removeTodo(todo.id);
                    }}></button>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
    </div>
)
}

export default Main;
