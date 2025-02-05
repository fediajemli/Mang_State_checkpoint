
import React, { useState } from 'react'
import Form from './Component/Form';
import TodosList from './Component/TodosList';
import Filter from './Component/Filter';
import useTodos from './hooks/useContext';
const App = () => {
  const {todos} = useTodos();
  // //  const [title,setTitle]=useState('')
  // //  const [text,setText]=useState('')
  //    const [todos, setTodos]=useState([]);
  //   //  const handleTitleChange = (e)=>{
  //   //   setTitle(e.target.value);
  //   //  }
  //   //  const handleTextChange = (e)=>{
  //   //   setText(e.target.value);
  //   //  }
  //   const handleAddTodo = (title,text)=>{
  //     if(!text.trim() || !title.trim()) return;
  //     const todo = {
  //       id:todos.length + 1,
  //       title,
  //       text,
  //       isCompleted:false,
  //     }
  //     setTodos([todo,...todos]);
      


  //   }
  //   const  deletTodo = (id)=>{
  //     setTodos(todos.filter((todo)=> todo.id !== id))
  //   }
  //   const toggleCompleted = (id)=>{
  //     setTodos(todos.map((todo)=> todo.id === id ? {...todo, isCompleted: !todo.isCompleted}:todo))
  //   }
 

  return (
    <div className='container'>
    
    
    
    {/* <div style={{maxWidth:'450px'}} className='border rounded m-3'>
      <div>
        <label className='form-group mb-3 ' >
          Write your title
        </label >
        <input onChange={handleTitleChange} value={title} id='title' type="title" placeholder='type your title ' className='form-control' />
      </div>
      
      <div>
        <label className='form-group mb-3 ' >
          Write your description
        </label >
        <input onChange={handleTextChange} value={text} id='text' type="text" placeholder='type your description ' className='form-control' />
      </div>
      <button disabled={!text.trim() || !title.trim()} onClick={handleAddTodo} className='btn btn-outline-dark mt-3'>Add</button>
  
    </div> */}
    <Form/>
    {/* <div className="todo-item">
      <ul className='list-group'>
     {
      todos.map((todo)=>{
       return <li key={todo.id} className='list-group-item d-flex justify-content-between align-items-center'>

         <input type='checkbox' onChange={()=>toggleCompleted(todo.id)} />
          <span className={`todo-text`}>{todo.text}</span>
          <div className="buttons">
            <button className="edit-btn">
              <FaEdit />
            </button>
            <button className="delete-btn">
              <FaTimes />
            </button>
     </div>


        </li>
      })
     }
      </ul>

        </div> */}
        {todos.length !== 0 && <Filter/> }
       
        <div style={{maxWidth:'450px'}} className='todo-list m-3' > 
          <TodosList />
        </div>
    </div>
  )
}

export default App
