import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { LoadingIcon } from '../Icons/LoadingIcon/LoadingIcon';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';


function AppUI (){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    unCompleteTodo,
   } = React.useContext(TodoContext)

    return (
        <>
          <TodoCounter/>
          <TodoSearch/>
  
            <TodoList>
            {loading && <LoadingIcon/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <TodosEmpty/>}

            {searchedTodos.map(todo =>(
              <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed} 
              onComplete={() => completeTodo(todo.text)}
              unComplete={() => unCompleteTodo(todo.text)}
              onDelete={()=> deleteTodo(todo.text)}
              />
              ))}
            </TodoList>


          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
        </>
      );
}

export { AppUI }