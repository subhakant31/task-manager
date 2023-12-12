import "./DeletePrompt.scss";

function DeletePrompt(props) {
  const deletePromptVisible = props.deletePrompt;
  const setDeletePromptVisible = props.setDeletePromptVisible;

  function confirmDelete(e) {
    const deleteResponse = e.target.innerText;
  }
  return (
    <div className='delete-prompt'>
      <h2 className='delete-prompt__title'>Do you want to delete the task ?</h2>
      <div className='delete-prompt__btn-wrapper' onClick={confirmDelete}>
        <button className='delete-prompt__btn-wrapper__yes'>Yes</button>
        <button className='delete-prompt__btn-wrapper__no'>No</button>
      </div>
    </div>
  );
}

export default DeletePrompt;
