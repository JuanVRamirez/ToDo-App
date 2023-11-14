import React from "react";
import "./CreateTodoButton.css"
import { TodoContext } from "../TodoContext/TodoContext";

function CreateTodoButton(){
  const {
    openModal,
    setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <button 
          className="CreateTodoButton" 
          onClick={() => {
            if (!openModal){
              setOpenModal(true)
            } else {
              setOpenModal(false)
            }
          }}
          >+</button>
      );
    }
export { CreateTodoButton }