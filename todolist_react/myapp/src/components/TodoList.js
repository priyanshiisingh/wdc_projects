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

  const updateitem = (itemid, newval) => {
    if (!newval.text) {
      return;
    }
    setItems((prev) => prev.map((i) => (i.id === itemid ? newval : i)));
  };
  const removeItem = (id) => {
    const removeArr = [...listitems].filter((item) => item.id != id);
    setItems(removeArr);
  };

  const completeTodo = (id) => {
    let updatei = listitems.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setItems(updatei);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={additem} />
      <TodoDom
        listitems={listitems}
        completeTodo={completeTodo}
        removeItem={removeItem}
        updateItem={updateitem}
      />
    </div>
  );
}

export default TodoList;
