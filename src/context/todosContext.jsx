import React, { createContext, useEffect, useState } from 'react'
import { getItemsFormStorage } from '../services/storage';
export const TodosContext =createContext();
const TodosProvider = ({children}) => {
//     // insert into local Storage
//     localStorage.setItem("todos",JSON.stringify([]))
//     // get from local Storage
//   JSON.parse(localStorage.getItem('todos'))

    //   const [todos, setTodos]=useState([]);
    //   const [todos, setTodos]=useState(()=>{
    //     // when the app starts we want to see all the todos on the local storage
    //     //  const storedTodo = JSON.parse(localStorage.getItem('todos'));
    //     //  return  storedTodo ? storedTodo : [];
    //    return  getItemsFormStorage();
    //   });
    const [todos,setTodos]=useState(getItemsFormStorage())
      const [filtered, setFiltered]= useState(getItemsFormStorage())
    //   making the local storage and the todos wstate in async we add in the dependecies array of the useEeffect 'todos'so when the todos change (by aa or delete action) react will update the local storage accordingly
      useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
      },[todos])
      useEffect(()=>{
        setFiltered(todos)
      },[todos])

      const filterTodos = (filter)=>{
        if(filter === 'all'){
            setFiltered(todos)
        }else {

            setFiltered(todos.filter((todo) => todo.isCompleted === Boolean(filter)))
        }

      }

   
     const handleAddTodo = (title,text)=>{
       if(!text.trim() || !title.trim()) return;
       const todo = {
         id:todos.length + 1,
         title,
         text,
         isCompleted:false,
       }
       setTodos([todo,...todos]);
       
 
 
     }
     const  deletTodo = (id)=>{
       setTodos(todos.filter((todo)=> todo.id !== id))
     }
     const toggleCompleted = (id)=>{
       setTodos(todos.map((todo)=> todo.id === id ? {...todo, isCompleted: !todo.isCompleted}:todo))
     }





  return <TodosContext.Provider value={{todos,handleAddTodo,deletTodo,toggleCompleted,filterTodos,filtered}}>{children}</TodosContext.Provider>
}

export default TodosProvider
