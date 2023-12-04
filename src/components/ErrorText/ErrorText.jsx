import "./ErrorText.scss";

function ErrorText(props) {
  const errorMessage = props.errorMessage; //message that is to be shown
  return <span className="error-text">{errorMessage}</span>;
}

export default ErrorText;
