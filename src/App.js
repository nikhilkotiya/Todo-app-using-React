import './App.css';
import Header from './My_components/Header'
import Todo from './My_components/Todo'
import React, { useState } from 'react';
import Add from './My_components/add'
function App() {
  const onDelete=(todo)=>{
    console.log("I am on delete",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }))
  }
  const [todos, setTodos] = useState([
      {
        sno:1,
        title:"Go",
        discription:"working",
      },
      { 
        sno:2,
        title:"Go",
        discription:"working",
      },
      {
        sno:3,
        title:"Go",
        discription:"working",
      },
    ]);
    return (
    <>
  <Header title="MyTodosList" />
  <Add/>
  <Todo todos={todos}  onDelete={onDelete}/>
  </>
  );
}
export default App;