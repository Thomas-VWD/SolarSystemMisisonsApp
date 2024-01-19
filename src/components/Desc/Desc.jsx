import "./Desc.scss";
import spaceX from "/spaceXToMars.jpg";

function Desc() {
  return (
    <>
      <div className="descBloc">
        <div className="descTxt">
          <p>
            {"L'exploration spatiale vous fait vibrer ?"} Alors, bienvenue sur
            cette application !
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
    </>
  );
}
export default Desc;
