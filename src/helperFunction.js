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

/* @function : completeTask
    @description : mark the selected task as complete
    @params :  taskId as number and taskData as an array of task objects
    @returns : taskData array
*/
export function completeTask(taskId, taskData) {
  const taskIndex = taskData.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    taskData[taskIndex].isCompleted = !taskData[taskIndex].isCompleted;
  }

  return taskData;
}

/* @function : deleteTask
    @description : delete the selected task
    @params :  taskId as number and taskData as an array of task objects
    @returns : taskData array
*/
export function deleteTask(taskId, taskData) {
  const taskIndex = taskData.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    // Use splice to remove the task from the array
    taskData.splice(taskIndex, 1);
  }

  return taskData;
}

/* @function : findIncompleteTaskLength
    @description : finds all the task counts which are incomplete
    @params :  taskData as Array
    @returns : count as number
*/
export function findIncompleteTaskLength(taskData) {
  var count = 0;
  for (var i = 0; i < taskData.length; i++) {
    if (taskData[i].isCompleted === false) {
      count++;
    }
  }
  return count;
}
