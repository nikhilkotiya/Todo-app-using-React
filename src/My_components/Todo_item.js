import React from 'react'

export const Todo_item = ({todo,onDelete}) => {
    return (
        <div>
            <h3>{todo.sno}</h3>
            <h3>{todo.title}</h3>
            <h3>{todo.discription}</h3>
            <button onClick={()=>onDelete(todo)}>Delete</button>
        </div> 
    )
}
