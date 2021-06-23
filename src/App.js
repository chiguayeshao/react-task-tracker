import { useState } from "react";
//导入header
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  //添加tasks
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctor Appoinment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Doctor Appoinment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Doctor Appoinment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 4,
        text: 'Doctor Appoinment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
    ]
  )

  return (
    <div className='container'>
      {/* 调用header 也可以在此给title赋值*/}
      <Header />
      {/* 将tasks内容传入Tasks */}
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
