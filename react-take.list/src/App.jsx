import { useState } from 'react';
import "./App.css";
import { ChakraProvider } from '@chakra-ui/react'

ReactDom.render (
  <ChakraProvider>
    <App/>
  </ChakraProvider>,
  document.getElementById('root')
)


function App() {
  const { 

    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  

  return (
  
      <>
        <div className="card-to-do">
          <h1>Lista de tareas</h1>
          <div className="counter-todos">
            <h3>
              N° Tareas: <span>{todosCount}</span>
            </h3>
            <h3>
              Pendientes: <span>{pendingTodosCount}</span>
            </h3>
          </div>

          <div className="add-todo">
            <h3>Agregar Tarea</h3>
            <Task handleNewTodo={handleNewTodo} />
          </div>

          <TaskList
            todos={todos}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        </div>
      </>
      ); 
  }


export default App;
