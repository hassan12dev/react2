import { useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function storeInput(e) {
    setInput(e.target.value);
  }

  function addTodo() {
    if (!input.trim()) {
      return alert("Input is empty");
    }
    if (editIndex !== null) {
      const updateTodoList = [...todolist];
      updateTodoList[editIndex] = input;
      setTodolist(updateTodoList)
      setEditIndex(null)

    }
    else {
      setTodolist([...todolist, input]);

    }
    setInput(""); // Clear input after adding
  }
  function deleteTodo(index) {
    const copylist = [...todolist];
    copylist.splice(index, 1);
    setTodolist(copylist)
  }
  function updateTodo(index) {
    setInput(todolist[index])
    setEditIndex(index)


  }

  return (
   
    <div className="container">
      <h1>Todo list</h1>
      <input
        value={input}
        onChange={storeInput}
        type="text"
        placeholder="Enter a todo"
      />
      <button className="add-btn" onClick={addTodo}>{(editIndex !== null)? "Update":"Add"}</button>
      {todolist.map((todolist, index) => {
        return (
          <div className="main-list" key={index}>
            <li>{todolist}</li>
            <button className="delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
            <button className="update-btn" onClick={() => updateTodo(index)}>Update</button>
          </div>

        )
      })}
    </div>
    
  );
}

export default App;

