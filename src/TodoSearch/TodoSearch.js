import React from "react";
import { CreateTodoButton } from "../CreateButton/CreateTodoButton";

import "./TodoSearch.css"
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch(){

  const {
  searchValue,
  setsearchValue,
  } = React.useContext(TodoContext)

    return(
      <div className="SearchBar">
        <input
          placeholder="Search your task"
          className="TodoSearch"
          value={searchValue}
          onChange={(event) =>{
            setsearchValue(event.target.value)
          }}
          />
          <CreateTodoButton/>
          
      </div>
    )
  }

  export { TodoSearch };