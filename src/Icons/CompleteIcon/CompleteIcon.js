import React from "react";
import { TodoIcons } from "../TodoIcons/TodoIcons";

function CompleteIcon({completed,  onComplete, unComplete}){
    
    const ToggleTodo = () => {
        if (!completed) {
            onComplete()
        } else {
            unComplete()
        }
    }

    return(
        <TodoIcons
        type="check"
        color={completed ? "green" : "gray"}
        onClick={ToggleTodo}
        />
    );
}

export { CompleteIcon }