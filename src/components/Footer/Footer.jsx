import "./Footer.scss";
import githubLogo from "/github-logo.svg";

function Footer() {
  return (
    <footer>
      <h1 className="footTitle">Solar System Missions</h1>
      <p className="by">
        By{" "}
        <a
          href="https://github.com/Thomas-VWD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="logo github" /> Thomas Verwaerde
        </a>
      </p>
      <div>
        <a
          href="https://github.com/Thomas-VWD/SolarSystemMisisonsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Le projet REACT</button>
        </a>
        <a
          href="https://github.com/Thomas-VWD/SolarSystemMisisons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Le projet Backend</button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
