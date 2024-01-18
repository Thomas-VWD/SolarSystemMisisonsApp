import "./Desc.scss";
import spaceX from "/spaceXToMars.jpg";

function Desc() {
  return (
    <>
      <div className="descBloc">
        <div className="descTxt">
          <p>
            {"L'exploration spatiale vous fait vibrer ?"} Alors bienvenue sur
            cette mini app !
            <br />
            Obtenez votre rapport PDF des prochaines missions !
          </p>
        </div>
        <img
          className="descImg"
          src={spaceX}
          alt="image d'illustration de la mission starship vers la planette Mars"
        />
      </div>
    </>
  );
}
export default Desc;
