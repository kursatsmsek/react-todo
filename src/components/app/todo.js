import React from 'react';
import Header from '../sections/header';
import Main from '../sections/main';
import Footer from '../sections/footer';
import { useState, useEffect } from 'react';

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Let's Start !",
      completed: false
    }
  ]);

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const [leftTodos, setLeftTodos] = useState(0);

  const [status, setStatus] = useState('all');

  useEffect(() => {
    let num = 0;
    {todos.map((todo) => {
      if (!todo.completed) {
        num++;
      }
    })}
    setLeftTodos(num)
    if (status === 'all') {
      setFilteredTodos(todos);
    }
    else if (status === 'actives') {
      setFilteredTodos(todos.filter(todo => todo.completed !== true));
    }
    else if (status === 'completedTodos') {
      setFilteredTodos(todos.filter(todo => todo.completed !== false));
    }
  }, [todos])

  useEffect(() => {
    if (status === 'all') {
      setFilteredTodos(todos);
    }
    else if (status === 'actives') {
      setFilteredTodos(todos.filter(todo => todo.completed !== true));
    }
    else if (status === 'completedTodos') {
      setFilteredTodos(todos.filter(todo => todo.completed !== false));
    }
  }, [status])

  return (
    <div>
      <section className="todoapp">
        <Header todos={todos} setTodos={setTodos} />
        <Main todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
        <Footer todos={todos} setFilteredTodos={setFilteredTodos} setTodos={setTodos} leftTodos={leftTodos} setStatus={setStatus} status={status}/>
      </section>
    </div>
)
}

export default Todo;
