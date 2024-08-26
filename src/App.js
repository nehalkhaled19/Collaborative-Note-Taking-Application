import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputTask from './components/InputTask'
import Navbar from './components/Navbar';
import SharedTasks from './components/SharedTasks';
import { TaskProvider } from "./contexts/TaskContext"
// ../contexts/TaskProvider";


export default function App() {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center ">
    <TaskProvider>
    <Router>
      <Navbar />
      <Routes>
  
          <Route  path="/" element={<InputTask/>} />
            <Route path="/shared" element={<SharedTasks/>} />
      </Routes>
    </Router>
    </TaskProvider> </div>
  
  )
}

