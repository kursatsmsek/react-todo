import React from 'react';
import Header from '../sections/header';
import Main from '../sections/main';
import Footer from '../sections/footer';
import { useState, useEffect } from 'react';

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Oku',
      completed: false
    },
    {
      id: 2,
      text: 'Sev',
      completed: false
    },
    {
      id: 3,
      text: 'Yaşat',
      completed: true
    }
  ]);

  const [leftTodos, setLeftTodos] = useState(0);

  useEffect(() => {
    console.log(todos)
    let num = 0;
    {todos.map((todo) => {
      if (!todo.completed) {
        num++;
      }
    })}
    setLeftTodos(num)
  }, [todos])

  return (
    <div>
      <section className="todoapp">
        <Header todos={todos} setTodos={setTodos} />
        <Main todos={todos} setTodos={setTodos}/>
        <Footer todos={todos} setTodos={setTodos} leftTodos={leftTodos}/>
      </section>
    </div>
)
}

export default Todo;
