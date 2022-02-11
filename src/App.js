import logo from './logo.svg';
import './App.css';
import Header from "./mycomponent/Header";
import { Addtodo } from "./mycomponent/Addtodo";
import { Todos } from "./mycomponent/Todos";
import { Footer } from "./mycomponent/Footer";

import React, { useState, useEffect } from 'react';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addtodo = (title, desc) => {
    console.log("i am adding this to todo list")
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }




  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <><Header title="TODO-LIST" showabout="true" />
      <Addtodo addtodo={addtodo} />
      <Todos todo={todos} onDelete={onDelete} />

      <Footer />

    </>
  );
}

export default App;
