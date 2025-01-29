function Header() {
  return (
    <>
      <header className="header">
        <img
          src="src\assets\react-icon.png"
          className="img-icon"
          alt="React logo"
        ></img>
        <nav>
          <ul className="nav-list">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
