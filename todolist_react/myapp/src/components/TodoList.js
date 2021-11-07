import { useState } from "react";
import TodoDom from "./TodoDom";
import TodoForm from "./TodoForm";

function TodoList() {
  const [listitems, setItems] = useState([]);

  const additem = (item) => {
    if (!item.text) {
      return;
    }
    const newItem = [item, ...listitems];
    setItems(newItem);
    // console.log(item, ...listitems);
  };

  const completeTodo = (id) => {
    let updateitem = listitems.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setItems(updateitem);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={additem} />
      <TodoDom listitems={listitems} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoList;
