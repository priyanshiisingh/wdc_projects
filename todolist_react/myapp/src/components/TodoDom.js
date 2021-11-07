import { useState } from "react";
import TodoForm from "./TodoForm";
import Icons from "../layouts/Icons";

function TodoDom({ listitems, completeTodo }) {
  const [edit, setEdit] = useState({ id: null, value: " " });
  return listitems.map((item, index) => (
    <div
      className={item.isComplete ? "todo-row complete" : "todo-row"}
      key={index}>
      <div
        key={item.id}
        onClick={() => {
          completeTodo(item.id);
        }}>
        {item.text}
      </div>
      <Icons />
    </div>
  ));
}

export default TodoDom;
