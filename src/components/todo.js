import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = [...data];

    setData(updatedTasks);
    console.log(updatedTasks);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 ">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do Task</h1>

        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={setTask}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md"
          >
            Add
          </button>
        </form>

        <ul className="mt-6">
          {data.map((task, index) => (
            <li key={index} className="p-2 border-b border-gray-200 text-lg">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
