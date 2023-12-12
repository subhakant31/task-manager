import "./StatusPill.scss";

function StatusPill(props) {
  const statusText = props.statusText;
  return (
    <div className={`status-pill ${statusText}`}>
      <span className="status-pill__text">{statusText}</span>
    </div>
  );
}

export default StatusPill;
