import "./SubHeader.scss";
import AddTaskBtn from "../components/AddTaskBtn/AddTaskBtn";
import { findIncompleteTaskLength } from "../helperFunction";
function SubHeader(props) {
  const taskData = props.taskData; 
  const taskFormVisible = props.taskFormVisible;
  const setTaskFormVisible = props.setTaskFormVisible;

  return (
    <div className='sub-header'>
      <div className='sub-header__task-count-date'>
        <span className='sub-header__task-count-date__date '>Total Tasks</span>
        <span className='sub-header__task-count-date__task-count'>
          {taskData.length}
        </span>
      </div>
      <div className='sub-header__pending-task-count-date'>
        <span className='sub-header__pending-task-count-date__date'>
          Pending Tasks
        </span>
        <span className='sub-header__pending-task-count-date__task-count'>
          {findIncompleteTaskLength(taskData)}
        </span>
      </div>
      <AddTaskBtn
        taskFormVisible={taskFormVisible}
        setTaskFormVisible={setTaskFormVisible}
      ></AddTaskBtn>
    </div>
  );
}

export default SubHeader;
