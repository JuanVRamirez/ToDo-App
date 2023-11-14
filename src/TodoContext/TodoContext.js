import React from "react";
import { useLocalStorage } from "./UseLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage("TODOS_V1", []);
      const [searchValue, setsearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false)
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(
        todo => {
          return todo.text.includes(searchValue)
        }
      );

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos)
      }
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
      }
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
      }

      const unCompleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.text === text)
        newTodos[todoIndex].completed = false
        saveTodos(newTodos)
    }

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setsearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            unCompleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}



export {TodoContext, TodoProvider}