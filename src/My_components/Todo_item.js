import React from 'react'

export const Todo_item = ({todo,onDelete}) => {
    return (
        <div>
            <h1>{todo.sno}</h1>
            <h3>{todo.discription}</h3>
            <h3>{todo.title}</h3>
            <button onClick={()=>onDelete(todo)}>Delete</button>
        </div> 
    )
}
