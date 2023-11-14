import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoCounter.css"
import React from "react";

function TodoCounter(){
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
    return(
      totalTodos === completedTodos ?

      <h2 className="TodoCounter">
        Congrats, you have no pending tasks.
      </h2>
      
      :

      <h2 className="TodoCounter">
        You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> tasks
      </h2>
    )
  }

  export { TodoCounter };