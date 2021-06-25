import { useState, useEffect } from "react";
//导入header
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  //添加tasks
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTask()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //fetch tasks 
  const fetchTask = async () => {
    const res = await fetch('http://localhost:5555/tasks')
    const data = await res.json()

    return data
  }

  //add task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5555/tasks', { method: 'POST', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(task) })

    const data = await res.json()
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5555/tasks/${id}`, { method: 'DELETE', })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      {/* 调用header 也可以在此给title赋值*/}
      <Header onShowAddTask={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* 将tasks内容传入Tasks */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'fuck'}
    </div>
  );
}

export default App;
