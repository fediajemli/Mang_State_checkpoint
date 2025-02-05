import { useContext } from "react";
import React from 'react'
import { TodosContext } from "../context/todosContext";

const useTodos = () => {
  return useContext(TodosContext);
}

export default useTodos
