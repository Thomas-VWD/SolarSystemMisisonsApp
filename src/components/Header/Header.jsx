import { useState } from "react";
import "./Header.scss";
import logo from "/planet.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const handleGeneratePDF = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/generatePDF");
      if (response.data.success) {
        toast.success("🦄 Le PDF a été généré avec succès!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setPdfGenerated(true);
      } else {
        toast.error(
          "❌ Une erreur s'est produite lors de la génération du PDF.",
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        console.error("PDF generation failed");
      }
    } catch (error) {
      toast.error(
        "❌ Une erreur s'est produite lors de la génération du PDF.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.error("Error generating PDF:", error);
    }
  };

  const handleViewPDF = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/viewPDF", {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "output.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <>
      <div className="headBox">
        <img className="appLogo" alt="logo planete" src={logo} />
        <h1 className="appTitle">Solar Systeme Missions</h1>
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
          {pdfGenerated && (
            <button className="seePdf" onClick={handleViewPDF}>
              Voir le PDF
            </button>
          )}
          <button className="github">Voir sur Github</button>
          <ToastContainer />
        </div>
      </header>
    </>
  );
};

export default Header;
