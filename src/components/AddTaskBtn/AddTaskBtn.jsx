import "./AddTaskBtn.scss";
function AddTaskBtn(props) {
  const setTaskFormVisible = props.setTaskFormVisible;
  const taskFormVisible = props.taskFormVisible;
  
  function handleClick() {
    setTaskFormVisible(!taskFormVisible);
  }
  return (
    <button className="add-task-btn" onClick={handleClick}>
      Add New
    </button>
  );
}

export default AddTaskBtn;
