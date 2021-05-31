import './App.css';
import Header from './My_components/Header'
import Todo from './My_components/Todo'
import React, { useState } from 'react';
import {AddTodo} from './My_components/add'
function App() {
  const onDelete=(todo)=>{
    console.log("I am on delete",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }))
  }
  const addtodo=(title,desc)=>{
    console.log("i am on add",title,desc)
    let count
    if(todos.length == 0){
      console.log("i am here")
      count =1;
    }
    else{
      console.log("i am here 2")
      count = todos[todos.length -1].sno+1;
    }
    console.log(count)
    const myTodo={
      sno:count,
      title:title,
      discription:desc,
    }
    console.log(myTodo)
    setTodos([...todos,myTodo]);
}
  const [todos, setTodos] = useState([
      {
        sno:1,
        title:"Go",
        discription:"working",
      }
    ]);
    return (
    <>
  <Header title="MyTodosList" />
  <AddTodo addtodo={addtodo}/>
  <Todo todos={todos}  onDelete={onDelete}/>
  </>
  );
}
export default App;