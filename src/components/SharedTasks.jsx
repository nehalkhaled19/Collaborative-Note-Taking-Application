import React, { useContext } from 'react';
import { TaskContext } from "../contexts/TaskContext.js";

export default function SharedTasks() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className=" w-75 rounded-3 p-lg-5 bg-light">
    <div className="px-lg-4">
      <h2 className='text-center'>Shared Tasks</h2>
      {tasks.filter(task => task.shared).map((task, index) => (
        <div  key={index} className="my-3 rounded py-2 px-3" style={{ backgroundColor: '#cbd7e2' }}>
          <p className="pOfTask my-1">{task.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
