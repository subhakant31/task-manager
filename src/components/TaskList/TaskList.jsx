import "./TaskList.scss";
import Task from "./Task/Task";
function TaskList(props) {
  const taskData = props.taskData; //task data from parent component
  const setTaskData = props.setTaskData; //function to change task data
  const setTaskFormVisible = props.setTaskFormVisible; //function to enable/disable form modal
  return (
    <ul className='task-list'>
      {taskData.map((task) => {
        return (
          <Task
            taskData={taskData}
            setTaskData={setTaskData}
            setTaskFormVisible={setTaskFormVisible}
            key={task.id}
            task={task}
          ></Task>
        );
      })}
    </ul>
  );
}

export default TaskList;
