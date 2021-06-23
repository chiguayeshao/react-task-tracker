import Task from "./Task"
// 获取传入的tasks内容
const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} />))}
        </>
    )
}

export default Tasks
