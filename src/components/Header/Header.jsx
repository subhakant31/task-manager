import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClock } from "@fortawesome/free-solid-svg-icons";
function Header(props) {
  const headerDate = props.headerDate;
  const setHeaderDate = props.setHeaderDate;

  const options = {
    day: "numeric",
    month: "short",
  };

  const formattedDate = headerDate.toLocaleDateString("en-US", options);

  console.log(formattedDate);
  return (
    <header className='header'>
      <div className='header__container'>
        <FontAwesomeIcon icon={faBars} />
        <span className='header__container__date'>{formattedDate}</span>
        <FontAwesomeIcon icon={faClock} />
      </div>
    </header>
  );
}

export default Header;
