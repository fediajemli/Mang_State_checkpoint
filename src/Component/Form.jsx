import React, { useState } from 'react'
import TodosList from './TodosList';
import { useForm } from 'react-hook-form';


const Form = ({handleAddTodo}) => {
    const {register, formState:{errors}}= useForm();
    console.log(errors)
const [title,setTitle]=useState('')
   const [text,setText]=useState('')
   const handleTitleChange = (e)=>{
    setTitle(e.target.value);
   }
   const handleTextChange = (e)=>{
    setText(e.target.value);
   }
  return (
    <div style={{maxWidth:'450px'}} className='border rounded m-3'>
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
    <button disabled={!text.trim() || !title.trim()} onClick={()=>{
      handleAddTodo(title,text)
      setTitle('')
      setText('')

    } } className='btn btn-outline-dark mt-3'>Add</button>

  </div>
  )
}

export default Form
