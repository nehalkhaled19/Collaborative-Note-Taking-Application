import React, { createContext, useState } from "react";

// إنشاء Context
export const TaskContext = createContext();

// إنشاء Provider لتوفير البيانات للمكونات
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
