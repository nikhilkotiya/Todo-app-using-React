import './App.css';
import About from './My_components/About'
import Header from './My_components/Header'
import Todo from './My_components/Todo'
import React, { useState, useEffect } from 'react';
import { AddTodo } from './My_components/add'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initodo;
  if (localStorage.getItem("todos") === null) {
    initodo=[];
  }
  else {
    initodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am on delete", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

   
  const addtodo = (title, desc) => {
    console.log("i am on add", title, desc)
    let count
    if (todos.length == 0) {
      console.log("i am here")
      count = 1;
    }
    else {
      console.log("i am here 2")
      count = todos[todos.length - 1].sno + 1;
    }
    console.log(count)
    const myTodo = {
      sno: count,
      title: title,
      discription: desc,
    }
    setTodos([...todos, myTodo]);
  }




  const [todos, setTodos] = useState(initodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <Router>
      <Header title="MyTodosList" />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addtodo={addtodo} />
              <Todo todos={todos} onDelete={onDelete} />
            </>
            )
          }} > 
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>
  );
}
export default App;