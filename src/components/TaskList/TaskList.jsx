import "./TaskList.scss";
import Task from "./Task/Task";
function TaskList(props) {
  const taskData = props.taskData; //task data from parent component
  return (
    <ul className='task-list'>
      {taskData.map((task) => {
        return <Task task={task}></Task>;
      })}
    </ul>
  );
}

export default TaskList;
