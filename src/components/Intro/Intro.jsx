import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import githubLogo from "/github-logo.svg";
import "./Intro.scss";

function Intro() {
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const handleGeneratePDF = async () => {
    try {
      const response = await axios.get(
        "https://backend-solar-system-missions.onrender.com/api/generatePDF"
      );
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
      const response = await axios.get(
        "https://backend-solar-system-missions.onrender.com/api/viewPDF",
        {
          responseType: "blob",
        }
      );

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
    <div className="introBox">
      <p className="intro">
        Compte rendu PDF des prochaines missions vers les planètes du système
        solaire.
      </p>
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
      <div className="buttonBox">
        <button className="pdf" onClick={handleGeneratePDF}>
          Générer le rapport
        </button>
        {pdfGenerated && (
          <button className="seePdf" onClick={handleViewPDF}>
            Voir le PDF
          </button>
        )}
        <button
          className="github"
          onClick={() => (location.href = "https://github.com/Thomas-VWD")}
        >
          Voir sur Github
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}
export default Intro;
