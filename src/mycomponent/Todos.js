import React from 'react'
import {Todoitem} from "../mycomponent/Todoitem";


export const Todos = (props) => {
  
  return (
    
    <div className="container my-3"  >
      <h3 className="text-center my-3 ">Todos List</h3>
      {props.todo.length===0 ? "No item to Display" :
 props.todo.map((todo)=>{
return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
 })} </div>
    
  )
}
