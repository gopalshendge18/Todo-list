import React, { useState } from 'react'


export const Addtodo = ({ addtodo }) => {
const [title,settitle] =useState("")
const [desc,setdesc] =useState("")
 const submit=(e)=>{
e.preventDefault();
if(!title || !desc)
alert("Title or Discreption can not be empty")
else
addtodo(title,desc)
settitle("");
setdesc("");

 }


  return (
    <div className = "container mb-3" >
        <h4 >Add Your Todos Here</h4>
        <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label" >Todo item</label>
      <input  type="text" className="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={(e)=>settitle(e.target.value)}/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label" >Time</label>
      <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>setdesc(e.target.value)}/>
    </div>
    
    <button type="submit" className="btn btn-sn btn-success">AddTodo</button>
  </form></div>
  )
}
