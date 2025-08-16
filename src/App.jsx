import { useState } from "react";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function storeInput(e) {
    setInput(e.target.value);
  }

  function addTodo() {
    if (!input.trim()) return alert("Input is empty");

    if (editIndex !== null) {
      const updatedList = [...todolist];
      updatedList[editIndex].text = input;
      setTodolist(updatedList);
      setEditIndex(null);
    } else {
      setTodolist([...todolist, { text: input, completed: false }]);
    }
    setInput(""); // Clear input after adding
  }

   function deleteTodo(index) {
    const copylist = [...todolist];
    copylist.splice(index, 1);
    setTodolist(copylist)
  }

  function updateTodo(index) {
    setInput(todolist[index].text);
    setEditIndex(index);
  }

  function toggleComplete(index) {
    const updatedList = [...todolist];
    updatedList[index].completed = !updatedList[index].completed;
    setTodolist(updatedList);
  }

  return (
   
    <div className="container">
      <h3>Review Presentation</h3>
      <p>You have {todolist.filter(item => !item.completed).length} task(s) to complete</p>

      <div className="input-section">
        <input
          value={input}
          onChange={storeInput}
          type="text"
          placeholder="Enter a todo"
        />
        <button className="add-btn" onClick={addTodo}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {todolist.map((item, index) => (
        <div className="task-item" key={index}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleComplete(index)}
          />
          <span className={item.completed ? "completed" : ""}>
            {item.text}
          </span>
          <button className="edit-btn" onClick={() => updateTodo(index)}>
            <i className="fas fa-pen"></i>
          </button>
          <button className="delete-btn" onClick={() => deleteTodo(index)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
    
  );
}

export default App;

