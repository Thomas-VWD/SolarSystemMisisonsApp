import "./Desc.scss";
import spaceX from "/spaceXToMars.jpg";
import npmLogo from "/npm.svg";
import reactLogo from "/react.svg";
import nodeLogo from "/node.png";

function Desc() {
  return (
    <>
      <div className="descBloc">
        <div className="descTxt">
          <p>
            {"L'"}exploration spatiale vous fait vibrer ? Alors, bienvenue sur
            cette application ! cette application !
            <br />
            Obtenez votre rapport PDF des prochaines missions !
          </p>
        </div>
        <img
          className="descImg"
          src={spaceX}
          alt="Image d'illustration de la mission Starship vers la planète Mars."
        />
      </div>
      <div className="descBloc2">
        <div className="descTxt">
          <h2>
            Génération de PDF avec{" "}
            <img className="nodeLogo" src={nodeLogo} alt="logo node.js" />
          </h2>
          <p>
            Les PDF sont générés à partir {"d'"}un serveur node avec le package{" "}
            <a href="https://www.npmjs.com/" alt="lien vers le site npm">
              npm
            </a>{" "}
            :{" "}
            <a
              href="http://pdfkit.org/docs/getting_started.html"
              alt="Lien vers le site de la librairie pdfkit"
            >
              pdfkit !
            </a>
          </p>
        </div>
        <img
          className="npmLogo"
          src={npmLogo}
          alt="Image d'illustration de la mission Starship vers la planète Mars."
        />
      </div>
      <div className="descBloc3">
        <div className="descTxt">
          <h2>
            {" "}
            <img
              className="reactLogo"
              src={reactLogo}
              alt="Image d'illustration de la mission Starship vers la planète Mars."
            />{" "}
            REACT pour le Front et pdfkit pour le Back
          </h2>
          <p>
            Je joue avec mes deux passions :{" l'"}
            astronomie et{" l' "}apprentissage continu des technologies de
            développement web.
          </p>
        </div>
      </div>
    </>
  );
}
export default Desc;
