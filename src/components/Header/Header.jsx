import "./Header.scss";

function Header(props) {
  return (
    <header className='header'>
      <div className='header__container'>
        <a href='/' className='header__container__logo'>
          Task Manager
        </a>
      </div>
    </header>
  );
}

export default Header;
