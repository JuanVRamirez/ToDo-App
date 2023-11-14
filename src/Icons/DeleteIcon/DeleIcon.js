import React from "react";
import { TodoIcons } from "../TodoIcons/TodoIcons";

function DeleteIcon({onDelete}){
    return(
        <TodoIcons
        type="delete"
        color="gray"
        onClick={onDelete}
        />
    );
}

export { DeleteIcon }