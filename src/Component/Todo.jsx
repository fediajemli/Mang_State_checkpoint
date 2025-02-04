import React, { useState } from 'react'
import {  FaEdit, FaTimes } from "react-icons/fa";

const Todo = ({todo, toggleCompleted, deletTodo}) => {
   
        
  
  return (
  <li key={todo.id} className='list-group-item d-flex justify-content-between align-items-center'>
  
           <input type='checkbox' checked={todo.isCompleted} name='' id='' onChange={()=>toggleCompleted(todo.id)} />
            {todo.text}
            <div className="buttons">
              <button className="edit-btn">
                <FaEdit cursor='pointer' />
              </button>
              <button className="delete-btn">
                <FaTimes cursor='pointer' onClick={()=>deletTodo(todo.id)} />
              </button>
       </div>
  
      
          </li>
  )
}

export default Todo
