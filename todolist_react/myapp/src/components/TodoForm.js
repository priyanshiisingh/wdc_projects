import { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };
  return (
    <div>
      <form className="todoform" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update item"
              value={input}
              name="text"
              className="todoinput update"
              onChange={handleChange}
            />
            <button className="todobutton update">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="add a text"
              value={input}
              name="text"
              className="todoinput"
              onChange={handleChange}
            />
            <button className="todobutton">Add</button>
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
