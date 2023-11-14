import React from "react";
import "./TodoForm.css"
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm(){
    const {
    addTodo,
    setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState("")

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }


    return( 
    <form onSubmit={onSubmit}>
        <label>Add a new task</label>
        <textarea
            placeholder="Write..."
            value={newTodoValue}
            onChange={onChange}
            required
        />
        <div className="TodoForm-buttonContainer">
            <button 
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
            >
                Cancel
            </button>
            <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
            >
                Create
            </button>
        </div>
    </form>
    )
}

export {TodoForm}