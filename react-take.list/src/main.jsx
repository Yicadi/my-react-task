import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Task } from './Task'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskList/>
    <Task/>
    

  </React.StrictMode>,
)
