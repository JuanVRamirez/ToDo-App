import "./TodoItem.css"
import { CompleteIcon } from "../Icons/CompleteIcon/CompleteIcon";
import { DeleteIcon } from "../Icons/DeleteIcon/DeleIcon";

function TodoItem({
  completed,
  text,
  onComplete,
  unComplete,
  onDelete,
}){

  
    return (
      <li className="TodoItem">
        <CompleteIcon
        completed={completed}
        onComplete={onComplete}
        unComplete={unComplete}
        />

      <p className={`${!completed && "TodoItem-p"} ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon
      onDelete={onDelete}
      />
    </li>
    );
  }

  export { TodoItem }