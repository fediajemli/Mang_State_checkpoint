
import Todo from './Todo';
import useTodos from '../hooks/useContext';

const TodosList = () => {
    const {filtered}=useTodos();
   

  return (
    <div className='list-group bookList d-flex align-items-center gap-2'>
    {
      filtered.map((todo) =>(
        <Todo key={todo.id}  todo ={todo}/>
      ))
    }
  </div>
  )
}

export default TodosList
