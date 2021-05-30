import React, { useState } from 'react';


export const AddTodo=(props)=> {
    const[title,setTitle] =useState("")
    const [desc, setDesc] = useState("")
    const submit=(e)=>{
        e.preventDefault();
         
    }
    return (
        <>
        <h1>Add Todo</h1>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Title</label>
                <input type="text"value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1"  className="form-label">Discription</label>
                <input type="text" value={desc} className="form-control" required onChange={(e)=>{setDesc(e.target.value)}} id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    )
}
