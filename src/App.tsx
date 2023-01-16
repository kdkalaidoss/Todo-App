import { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const handleAdd = () => {
    setTaskList((tasks) => [...tasks, task]);
    setTask("");
  };
  const editedData = (data: any, index: number) => {
    setTaskList(data);
  };
  const deletedData=(data:any)=>{
    setTaskList(data)
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="formControl">
        <label htmlFor="task">Task : </label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          name="task"
          id="task"
        />
        <button onClick={handleAdd} type="submit">
          Add
        </button>
      </div>
      <div className="lists">
        {taskList.map((task, index) => (
          <div className="list">
            <Todo
              task={task}
              index={index}
              taskList={taskList}
              editedData={editedData}
              deletedData={deletedData}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
