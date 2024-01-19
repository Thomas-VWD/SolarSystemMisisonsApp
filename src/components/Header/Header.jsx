import "./Header.scss";
import logo from "/planet.svg";

const Header = () => {
  return (
    <header className="headBox">
      <img className="appLogo" alt="logo planete" src={logo} />
      <h1 className="appTitle">Solar System Missions</h1>
    </header>
  );
};

export default Header;
