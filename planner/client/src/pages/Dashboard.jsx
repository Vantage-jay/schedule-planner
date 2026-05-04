import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'

function Dashboard() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(prev => [...prev, { ...task, id: Date.now(), done: false }])
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-1">
            {new Date().toDateString()}
          </p>
          <h1 className="text-3xl font-bold text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}>
            My Day
          </h1>
        </div>

        {/* Task Input */}
        <TaskInput onAdd={addTask} />

        {/* Task List */}
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

      </div>
    </div>
  )
}

export default Dashboard