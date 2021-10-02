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

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <div>
      <section className="todoapp">
        <Header todos={todos} setTodos={setTodos} />
        <Main todos={todos} setTodos={setTodos}/>
        <Footer />
      </section>
    </div>
)
}

export default Todo;
