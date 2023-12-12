import "./AddTaskBtn.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
function AddTaskBtn(props) {
  const setTaskFormVisible = props.setTaskFormVisible;
  const taskFormVisible = props.taskFormVisible;
  function handleClick() {
    setTaskFormVisible(!taskFormVisible);
  }
  return (
    <button className='add-task-btn' onClick={handleClick}>
      Add New
    </button>
  );
}

export default AddTaskBtn;
