import { useState } from "react";
//导入header
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  //添加tasks
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctor Appoinment1',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Doctor Appoinment2',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Doctor Appoinment3',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 4,
        text: 'Doctor Appoinment4',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
    ]
  )

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      {/* 调用header 也可以在此给title赋值*/}
      <Header />
      <AddTask onAdd={addTask} />
      {/* 将tasks内容传入Tasks */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'fuck'}
    </div>
  );
}

export default App;
