import "./Header.scss";
import logo from "/planet.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  async function handleGeneratePDF() {
    try {
      const response = await axios.get("http://localhost:3000/api/generatePDF");
      console.log(response);
      if (response.status === 200) {
        toast.success("🦄 Wow so easy!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="headBox">
        <img className="appLogo" alt="logo planete" src={logo} />
        <h1 className="appTitle">Solar Systeme Misions</h1>
      </div>
      <header>
        <p className="intro">
          Compte rendu PDF des prochaines missions vers les planètes du système
          solaire.
        </p>
        <p className="by">By Thomas Verwaerde</p>
        <div>
          <button className="pdf" onClick={handleGeneratePDF}>
            Générer le rapport
          </button>
          <button className="seePdf">voir le PDF</button>
          <button className="github">Voir sur Github</button>
          <ToastContainer />
        </div>
      </header>
    </>
  );
}

export default Header;
