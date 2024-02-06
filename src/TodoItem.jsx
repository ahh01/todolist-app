import { useState } from "react";
import React from "react";

export default function TodoItem() {
  const [addText, setAddText] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleAddText(event) {
    setAddText(event.target.value);
  }
  function handleTodolist() {
    if (addText.trim() !== "") {
      setTodoList([...todoList, { title: addText, done: false }]);
      setAddText("");
    } else {
      return;
    }
  }

  function handleDelete(index) {
    setTodoList(todoList.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div>
        <h1>Todo List</h1>
        <h2>Title:</h2>
      </div>
      <div>
        <input type="text" value={addText} onChange={handleAddText} placeholder="Type Here" />
      </div>
      <button onClick={handleTodolist}>SAVE</button>
      {/*  <button onClick={showList}>Show</button> */}

      <ul>
        {todoList.map((item, index) => {
          return (
            <li key={item.id}>
              {item.title}
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
