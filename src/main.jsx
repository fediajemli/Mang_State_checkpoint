import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import TodosProvider from './context/todosContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodosProvider>
    <App />

    </TodosProvider>

   
  </StrictMode>,
)
