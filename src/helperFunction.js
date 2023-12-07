/* @function : checkDueDate
    @description : returns a flag whether the input date is past the due date or not
    @params :  input date as string
    @returns : true/false boolean
*/
export function checkDueDate(date) {
  const currentDate = new Date();
  const dueDate = new Date(date);
  if (currentDate > dueDate) {
    return false;
  } else {
    return true;
  }
}

/* @function : sortData
    @description : sorting according to requirement
    @params :  taskData as Array, sortBy as variable
    @returns : taskData array
*/
export function sortData(taskData, sortBy) {
  if (sortBy === "due-date-descending") {
    taskData.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    return taskData;
  } else if (sortBy === "due-date-ascending") {
    taskData.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    return taskData;
  } else if (sortBy === "status-completed") {
    taskData.sort((a, b) => {
      return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? -1 : 1;
    });
    return taskData;
  }
}

/* @function : sortData
    @description : sorting according to requirement
    @params :  taskData as Array, sortBy as variable
    @returns : taskData array
*/
export function completeTask(taskId, taskData) {
  const taskIndex = taskData.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    taskData[taskIndex].isCompleted = !taskData[taskIndex].isCompleted;
    console.log(`Task with ID ${taskId} deleted successfully.`);
  } else {
    console.log(`Task with ID ${taskId} not found.`);
  }

  return taskData;
}
