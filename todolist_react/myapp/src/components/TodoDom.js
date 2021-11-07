import { useState } from "react";
import TodoForm from "./TodoForm";
import Icons from "../layouts/Icons";

function TodoDom({ listitems, completeTodo, removeItem, updateItem }) {
  const [edit, setEdit] = useState({ id: null, value: " " });

  const submitUpdate = (value) => {
    updateItem(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

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

      <div className="icons">
        <i
          className="fa fa-times"
          style={{ fontSize: "1em" }}
          onClick={() => {
            removeItem(item.id);
          }}></i>
        <i
          className="fa fa-pencil"
          style={{ fontSize: "1em" }}
          onClick={() => {
            setEdit({
              id: item.id,
              value: item.text,
            });
          }}></i>
      </div>
    </div>
  ));
}

export default TodoDom;
