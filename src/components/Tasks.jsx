import React, { useContext, useState } from 'react';
import { TaskContext } from "../contexts/TaskContext";

export default function Tasks() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [editMode, setEditMode] = useState(null);

  // Delete a task
  function deleteItem(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  // Edit a task
  function editItem(index, newText) {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(newTasks);
  }

  // Share a task
  function shareItem(index) {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, shared: !task.shared } : task
    );
    setTasks(newTasks);
  }

  // Mark as done
  function markAsDone(index) {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  }

  // Handle inline editing
  function handleEdit(e, index) {
    if (e.key === 'Enter') {
      editItem(index, e.target.value);
      setEditMode(null);
    }
  }

  return (
    <div className="px-lg-4">
      {tasks?.map((task, index) => (
        <div
          key={index}
          className={`my-3 rounded py-2 ${task.done ? 'bg-success' : ''}`}
          style={{ backgroundColor: '#cbd7e2' }}
        >
          <div className="d-flex align-items-center px-lg-4 w-100">
            {editMode === index ? (
              <input
                type="text"
                defaultValue={task.text}
                onKeyDown={(e) => handleEdit(e, index)}
                className="form-control"
              />
            ) : (
              <p className={`pOfTask my-1 ${task.done ? 'done' : ''}`}>{task.text}</p>
            )}
            <div className="ms-auto">
              <i
                className={`fa-solid mx-2 ${task.done ? 'fa-undo-alt' : 'fa-circle-check'}`}
                onClick={() => markAsDone(index)}
              ></i>
              <i
                className="fa-solid mx-2 fa-trash-can"
                onClick={() => deleteItem(index)}
              ></i>
              <i
                className="fa-solid mx-2 fa-edit"
                onClick={() => setEditMode(index)}
              ></i>
              <i
                className={`fa-solid mx-2 ${task.shared ? 'fa-share-alt-square' : 'fa-share-alt'}`}
                onClick={() => shareItem(index)}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
