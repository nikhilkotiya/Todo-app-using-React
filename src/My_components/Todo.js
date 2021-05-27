import React from 'react'
import { Todo_item } from './Todo_item'

export default function Todo(props) {
    return (
        <div className="container">
            <h3>Todos List</h3>
            {props.todos.length===0? "No todo to display":
            props.todos.map((todo)=>{
            return <Todo_item todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
            }
            
        </div>
    )
}
