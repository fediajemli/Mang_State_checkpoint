 export const getItemsFormStorage = () =>{
    const storedTodo = JSON.parse(localStorage.getItem('todos'));
    return  storedTodo ? storedTodo : [];
}