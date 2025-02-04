import React, { useState } from 'react'
import Todo from './Todo';


const TodosList = ({todos, toggleCompleted, deletTodo}) => {
    
   

  return (
    <div className='list-group bookList d-flex align-items-center gap-2'>
    {
      todos.map((todo) =>(
        <Todo key={todo.id} toggleCompleted={toggleCompleted} deletTodo={deletTodo} todo ={todo}/>
      ))
    }
      
    
  </div>
  )
}

export default TodosList
