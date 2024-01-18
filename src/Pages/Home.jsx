import Desc from "../components/Desc/Desc";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import "./Home.scss";

function Home() {
  return (
    <div className="homeBox">
      <Header />
      <Intro />
      <Desc />
      <Footer />
    </div>
  );
}

export default Home;
